import { createClient } from "contentful-management";
const clientMgr = createClient({
  accessToken: process.env.NEXT_PUBLIC_CDM_ACCESS
})
  .getSpace(process.env.NEXT_PUBLIC_CDA_SPACE)
  .then(space => space.getEnvironment("master"));

export default clientMgr;
