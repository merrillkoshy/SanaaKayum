import client from "../constants/config"
import { async } from "q";

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
    var productMap = [];
    var lowerCords = [];
    var lingeries = [];
    fetchEntry("products", 600, productMap)
        .then(fetchEntry("lowerCoordinate", 100, lowerCords))
        .then(fetchEntry("lingerie", 100, lingeries))

    return await [productMap, lowerCords, lingeries].flat()

    }
     