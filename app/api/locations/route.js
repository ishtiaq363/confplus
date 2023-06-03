

import {getlocations} from "../helper";

export async function GET(request) {
  return Response.json(await getlocations());
}
