import { createClient } from "contentful-management";
const clientMgr = createClient({
  accessToken: "CFPAT-qLeUTcWTxcHekMV18UmDwahPeBeRRnTCXMUJ_I4pxHA"
})
  .getSpace("calc8uiajr6g")
  .then(space => space.getEnvironment("master"));

export default clientMgr;
