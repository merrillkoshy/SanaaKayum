import client from "../constants/config";

export async function getProducts() {
  var productMap = [];

  const productEntries = await client.getEntries({
    content_type: "products",
    limit: 600
  });
  if (productEntries.items) productMap.push(productEntries.items);
  const lowerCords = await client.getEntries({
    content_type: "lowerCoordinate"
  });
  if (lowerCords.items) productMap.push(lowerCords.items);
  const lingeries = await client.getEntries({ content_type: "lingerie" });
  if (lingeries.items) productMap.push(lingeries.items);
  return productMap.flat();
}
export default { getProducts };
