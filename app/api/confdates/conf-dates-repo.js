

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





