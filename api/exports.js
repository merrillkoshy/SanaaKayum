import client from "../constants/config"
const slugify = require("@sindresorhus/slugify");

  const fetchEntry = (contentType, limit, container) => {
    
      client
        .getEntries({
          content_type: contentType,
          limit: limit
        })
        .then(function(entries) {
          entries.items.map(function(entry, i) {
            if (entry.fields) {
              // fetch products

              container[i] = entry.fields;
            }
          });
          container = [...new Set(container)];
        })
    
  };


  export async function getProducts(){
    // let data
    var productMap = [];
    
    // fetchEntry("products", 600, productMap)
    // fetchEntry("lowerCoordinate", 100, lowerCords)
    // fetchEntry("lingerie", 100, lingeries)
    // data=await [productMap, lowerCords, lingeries].flat()
    // return await data

    const productEntries = await client.getEntries({content_type: "products",
      limit: 600})
  if (productEntries.items) productMap.push(productEntries.items)
  const lowerCords = await client.getEntries({content_type: "lowerCoordinate"})
  if (lowerCords.items) productMap.push(lowerCords.items)
  const lingeries = await client.getEntries({content_type: "lingerie"})
  if (lingeries.items) productMap.push(lingeries.items)
  return productMap.flat()
  

    }
    export default { getProducts }
    // export async function getSlugs(){  
    //    const slugStager=await getProducts();
       
    //     return p.fields
    //   const slugs = slugStager.map((stage) => ({
    //     params: { pid: stage.serialNumber,
    //     slug:slugify(stage.description) },
    //   }))
      
    //    return slugs
  
    //   }

         