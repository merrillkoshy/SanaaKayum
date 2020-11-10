import client from "../constants/config"

  const fetchEntry = (contentType, limit, container) => {
    return Promise.resolve(
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
    );
  };


  export async function getProducts(){
    let data
    var productMap = [];
    var lowerCords = [];
    var lingeries = [];
    fetchEntry("products", 600, productMap)
        .then(fetchEntry("lowerCoordinate", 100, lowerCords))
        .then(fetchEntry("lingerie", 100, lingeries))
        .then(async()=>{
          data=await [productMap, lowerCords, lingeries].flat()
        })
        
        console.log(data)
    return await data

    }
    export async function getSlugs(){
      var productMap = [];
      var lowerCords = [];
      var lingeries = [];
      fetchEntry("products", 600, productMap)
          .then(fetchEntry("lowerCoordinate", 100, lowerCords))
          .then(fetchEntry("lingerie", 100, lingeries))
  
       const slugStager=await [productMap, lowerCords, lingeries].flat();
      const slugs =await slugStager.map((stage) => ({
        params: { pid: stage.serialNumber,
        slug:slugify(stage.description) },
      }))
       return slugs
  
      }

         