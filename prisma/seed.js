
import path from "path";
import { promises as fs } from "fs";
import {PrismaClient}  from "@prisma/client";
//import prisma from './prisma';
import jwt from 'jsonwebtoken';
export async function readJSON(filePath) {
  const dataPath = path.join(process.cwd(), filePath);
 // console.log(dataPath);
  
  const fileContent = await fs.readFile(dataPath, "utf8");
 // console.log(fileContent);
  return JSON.parse(fileContent);
   
}


const prisma = new PrismaClient();
async function main() {
  try {
dates();
institute();
location();
users();
  }
  catch(error){
console.log(error)
  }
}
/*
async function institute() {
  try {
 //const instituteName = await readJSON('./../../data/institutions.json');
  const cr= await prisma.papers.findMany();
    console.log( cr)
  }
   
  catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}
*/

//async function main() {
//   try {
//   const cr= await prisma.user.findUnique(
//     {
//       where:{
//         id:2
//       }
//     }
//   )
//    console.log(cr);
//   }
   
//   catch (e) {
//     console.log(e.message);
//     return { error: e.message };
//   }
// }


async function users() {
    try {
   const fetchedUsers = await readJSON('./../../data/users.json');
    const cr= await prisma.user.createMany({
      data: fetchedUsers,
  })
      console.log( cr)
    }
     
    catch (e) {
      console.log(e.message);
      return { error: e.message };
    }
  }


async function dates() {
  try {
 const conDate = await readJSON('./../../data/conf-dates.json');
  const cr= await prisma.confDate.createMany({
  data:{
    conDate
  },
})
    console.log( cr)
  }
   
  catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}

async function location() {
  try {
 const locationName = await readJSON('./../../data/locations.json');
  const cr= await prisma.location.createMany({
  data:{
    locationName
  },
})
    console.log( cr)
  }
   
  catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}

// seed for institute Names

async function institute() {
  try {
 const instituteName = await readJSON('./../../data/institutions.json');
  const cr= await prisma.institution.createMany({
  data:{
    instituteName
  },
})
    console.log( cr)
  }
   
  catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}

/*
async function main() {
  try {
 
  const cr= await prisma.user.deleteMany()
      console.log( cr)
  }
   
  catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}
*/
//seed for dates
/*async function main() {
  try {
    const fetchedUsers = await readJSON('./../../data/users.json');
        const cr= await prisma.user.createMany({
          data: fetchedUsers,
      })

    console.log( cr)
  }
   
  catch (e) {
    console.log(e.message);
    return { error: e.message };
  }
}

async function main() {
  try{
    const cr = await prisma.user.findMany({});
    console.log(cr)

  }catch(e){
    console.log(e)
  }
}

// }
*/
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
