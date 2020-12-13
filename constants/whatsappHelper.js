const slugify = require("@sindresorhus/slugify");

const phoneNumber = "971523331757";
const whatsAppthis = products => {
  const tx =
    "Hi! I would like to know about the " +
    products.article +
    ", " +process.env.NEXT_PUBLIC_DOMAIN+
    "/product/" +products.serialNumber+"/"+
    slugify(products.description);
    
  window.location.href = "https://wa.me/" + phoneNumber + "?text=" + tx;
};
export default whatsAppthis;