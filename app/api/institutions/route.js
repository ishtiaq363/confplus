import { getInstitutes} from "../helper";

export async function GET(request) {
  return Response.json(await getInstitutes());
}
