import fs from "fs-extra";
import path from "path";
import { accountsRepo } from "./users-repo";
import { readJSON } from "../utils";
import prisma from '../prisma'
const filePath = "data/papers.json";
export const getPapers = async () => await readJSON(filePath);
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

// export async function getPaperById(id) {
//   const papers = await getPapers();
//   return papers.find((p) => p.id == id);
// }

class PapersRepo {
  constructor() {
    this.filePath = path.join(process.cwd(), "/data/papers.json");
  }

  async getPapers() {
    const papers = await prisma.paper.findMany();
    return papers;
  }
  async getPapersByReviewerId(mid) {
    const papers = await prisma.paper.findMany({
      where: {
        reviewers: {
          in: mid,
        },
      },
    });
    return papers;
  }
 
  async  getPaperById(pid) {
    const paper = await prisma.paper.findUnique({
      where:{
        id:parseInt(pid)
      }
    })
    return paper;
  }

  async getAcceptedPapers() {
    const papers = await this.getPapers();
    return papers.filter((p) => {
      const sum = this.getSumOverallEvaluation(p);
      return sum != null && sum >= 2;
    });
  }

  getSumOverallEvaluation(paper) {
    return paper.reviews.reduce((sum, review) => sum + review.overallRating, 0);
  }

  async getReviews(paperId) {
    const paper = await this.getPaperById(paperId);
    return paper.reviews;
  }
  async getReviewByPaperId(paperId){
    const previousReview = await prisma.paper.findUnique({
      where :{
        id:paperId
      },
      select:{
        reviews: true
      }
    })
    return previousReview;
  }
  async addReview(paperId, review) {
   const prevVal =  await this.getReviewByPaperId(parseInt(paperId))
   
   prevVal.reviews.push(review);
    const paper =await prisma.paper.update({
      where: {
        id: parseInt( paperId),
      },
      data: {
        reviews: {
          set: prevVal.reviews
        }
      },
    })
   await this.updatePaper(paper);
  }

  async updateReview(paperId, review) {
    const paper = await this.getPaperById(paperId);
    const index = paper.reviews.findIndex((r) => r.userID == review.userID);
    paper.reviews[index] = review;
    await this.updatePaper(paper);
  }

  async addPaper(paper) {
    paper.reviewers = await accountsRepo.getRandomReviewersID(); //assign paper to random reviewers
    paper.isPresented = false;
    paper.reviews = [];
 
    try {
      const cr = await prisma.paper.create({
        data: paper,
      });
     
    } catch (e) {
      
      return { error: e.message };
    }
  }

  async togglePresented(id) {
    const paper = await this.getPaperById(id);
    paper.isPresented = !paper.isPresented;
    await this.updatePaper(paper);
    return paper.isPresented;
  }

  async updatePaper(paper) {
    const papers = await this.getPapers();
    const index = papers.findIndex((a) => a.id == paper.id);
    papers[index] = paper;
    await fs.writeFile(this.filePath, JSON.stringify(papers, null, 2));
    return paper;
  }
}

export const papersRepo = new PapersRepo();
