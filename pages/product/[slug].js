import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { slug, id } = router.query;

  return <h1>Hello {id}</h1>;
};
export default Product;
