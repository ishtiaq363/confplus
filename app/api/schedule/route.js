import { getSchedule, schedRepo } from "../repos/schedule-repo";

export async function GET(request) {
  try {
   
     const schedule = await schedRepo.getAllSchedule();
     console.log('i am in schedule rout')
    console.log(schedule);
    console.log('i am at end of schedule rout')
    return Response.json(schedule);
  } catch (e) {
    console.log(e);
    return Response.json(
      { error: "There was an internal error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  //add new session to schedule
  const newSession = await request.json();
  const sess = await schedRepo.addSession(newSession);
  return Response.json(sess);
}

export async function PUT(request) {
  //update session in schedule
  const updatedSession = await request.json();
  const sess = await schedRepo.updateSession(updatedSession);
  return Response.json(sess);
}

export async function DELETE(request) {
  //delete entire schedule
  return Response.json(schedRepo.deleteSchedule());
}
