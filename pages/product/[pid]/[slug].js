import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
// import { connect } from "react-redux";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../../wrappers/product/RelatedProductSlider";
import Skeleton from "react-loading-skeleton";

import ProductImageDescription from "../../../wrappers/product/ProductImageDescription";
import { isMobile } from "react-device-detect";
import HeaderMeta from "../../../components/header/HeaderMeta";
import NotFound from "../../404";
import LoadingScreen from "../../../helpers/LoadingScreen";
import { getProducts, getSlugs } from "../../../api/exports";

import { getMinimumRangeTransitionRange } from "rc-tree/lib/NodeList";

const slugify = require("@sindresorhus/slugify");

export async function getStaticPaths() {
  const res = await getProducts();
  const products = await res.map(p => {
    return p.fields;
  });

  const paths = products.map(product => ({
    params: {
      pid: product.serialNumber,
      slug: slugify(product.description)
    }
  }));

  return {
    paths,
    fallback: true
  };
}
// : allProducts?.map(stage=> `products/${stage.serialNumber}/${slugify(stage.description)}`) ?? [],
export async function getStaticProps({ params }) {
  const res = await getProducts();
  const staticProducts = await res.map(p => {
    return p.fields;
  });
  const staticProduct = await staticProducts.filter(field => {
    if (field.serialNumber === params.pid) return field;
  });

  return {
    props: {
      staticProduct
    },
    revalidate: 1
  };
}

const Product = ({ staticProduct }) => {
  const { isFallback } = useRouter();
  const router = useRouter();
  const { pid } = router.query;

  const [product, setProd] = useState();
  let head;
  // useEffect(() => {
  //   async function getPid() {
  //     const acquiredPid = staticProducts?.filter(
  //       single => single.serialNumber === pid
  //     )[0];

  //     setProd(acquiredPid);
  //   }
  //   getPid();
  // }, []);

  if (!isFallback && !staticProduct) {
    return router.push("/404");
  }
  console.log(staticProduct);
  return (
    <>
      {isFallback ? (
        <Skeleton count={5} />
      ) : staticProduct ? (
        console.log(staticProduct)
      ) : // <LayoutOne
      //   article={staticProduct.article}
      //   title={staticProduct.description}
      //   description={staticProduct.description}
      //   image={`https:${staticProduct.images[0].fields.file.url}`}
      //   keywords={
      //     `${staticProduct.tags}, Sana\'a Kayum, Dubai, Fashion, ` +
      //     `${staticProduct.article}, ` +
      //     `${staticProduct.description}`
      //   }
      //   url={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/product/${
      //     staticProduct.serialNumber
      //   }/${slugify(staticProduct.description)}`}
      //   color={staticProduct.color}
      //   headerTop="visible"
      // >
      //   <ProductImageDescription
      //     spaceTopClass={isMobile ? "pt-10" : "pt-100"}
      //     spaceBottomClass={isMobile ? "pb-10" : "pb-100"}
      //     product={product}
      //     galleryType={"leftThumb"}
      //   />

      //   <RelatedProductSlider
      //     spaceBottomClass={isMobile ? "pt-10" : ""}
      //     category={staticProduct.article}
      //   />
      // </LayoutOne>
      null}
    </>
  );
};
// const mapStateToProps = state => {
//   return {
//     products: state.productData.products
//   };
// };

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const products = await getProducts()

//   // Pass data to the page via props
//   return { props: { products } }
// }

export default Product;
