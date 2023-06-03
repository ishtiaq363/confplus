
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();
import prisma from '../prisma'
class AccountsRepo {
  constructor() {
   // this.path = path.join(process.cwd(), "/data/users.json");
  }

  async getAccounts() {
    const accounts = await prisma.user.findMany();
    return accounts;
  }
  async getuserbyemailandpassword(user) {
    console.log('i am in get users by email and passwod')
    console.log(user)
    try {
      const account = await prisma.user.findMany({
        where:{
          email:user.email,
          password:user.password
        }
      })
      return account;
    } catch (e) {
      
      return { error: e.message };
    }
  }
  async getAccountById(uid) {
    
    const accounts = await prisma.user.findUnique(
      {
      where:{
        id:parseInt(uid)
      }
    })
    return accounts;
  }

  async getAccountByEmail(email) {
    const accounts = await prisma.user.findUnique(
      {
      where:{
        email:email
      }
    })
    return accounts;
  }

  async getAccountsOfRole(rolee) {
    const accounts = await prisma.user.findMany(
      {
      where:{
        role:rolee
      }
    })
    return accounts;
  }

  async getRandomReviewersID() {
    const reviewers = await this.getAccountsOfRole("reviewer");
    const randomReviewers = [];
    for (let i = 0; i < 2; i++) {
      const index = Math.floor(Math.random() * reviewers.length);
      randomReviewers.push(reviewers[index].id);
      reviewers.splice(index, 1);
    }
    return randomReviewers;
  }
}

export const accountsRepo = new AccountsRepo();






// import fs from "fs-extra";
// import path from "path";

// class AccountsRepo {
//   constructor() {
//     this.path = path.join(process.cwd(), "/data/users.json");
//   }

//   async getAccounts() {
//     const accounts = await fs.readJSON(this.path);
//     return accounts;
//   }

//   async getAccountById(id) {
//     const accounts = await this.getAccounts();
//     return accounts.find((a) => a.id == id);
//   }

//   async getAccountByEmail(email) {
//     const accounts = await this.getAccounts();
//     return accounts.find((a) => a.email == email);
//   }

//   async getAccountsOfRole(role) {
//     const accounts = await this.getAccounts();
//     return accounts.filter((a) => a.role == role);
//   }

//   async getRandomReviewersID() {
//     const reviewers = await this.getAccountsOfRole("reviewer");
//     const randomReviewers = [];
//     for (let i = 0; i < 2; i++) {
//       const index = Math.floor(Math.random() * reviewers.length);
//       randomReviewers.push(reviewers[index].id);
//       reviewers.splice(index, 1);
//     }
//     return randomReviewers;
//   }
// }

// export const accountsRepo = new AccountsRepo();
