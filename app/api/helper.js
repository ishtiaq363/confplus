//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();
import prisma from './prisma'
export async function getConfDates() {
  try {

    const dates = await prisma.confDate.findMany();
    return await dates;
  } catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
 
}


export async function getInstitutes() {
  try {

    const institue = await prisma.institution.findMany();
    return  institue;
  } catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
 
}

export async function getlocations() {
  try {

    const location = await prisma.location.findMany();
    return await location;
  } catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
 
}