const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CDA_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CDA_ACCESS
});

export default client;
