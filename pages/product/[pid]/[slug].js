import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../../layouts/LayoutOne";
import Breadcrumb from "../../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../../wrappers/product/ProductImageDescription";
import { isMobile } from "react-device-detect";
import HeaderMeta from "../../../components/header/HeaderMeta";
import NotFound from "../../404"
import LoadingScreen from "../../../helpers/LoadingScreen"
import {getProducts, getSlugs} from "../../../api/exports"
const slugify = require("@sindresorhus/slugify");

const Product = products => {
  const router = useRouter();
  if (!router.isFallback && !products) {
    return <NotFound />
  }

  const { pid } = router.query;
  

  const [product,setProd]=useState()
  useEffect(()=>{
    async function getPid(){
      const acquiredPid=await products["products"].filter(
        single => single.serialNumber ===  pid 
      )[0];
      setProd(acquiredPid)
    }
    getPid()
  },[])
 
  return (
    <LayoutOne headerTop="visible">
        {router.isFallback ? (
         <LoadingScreen />
        ):(product?
          <>
          <HeaderMeta
        article={product.article}
        title={product.description}
        description={product.description}
        image={`https:${product.images[0].fields.file.url}`}
        keywords={
          `${product.tags}, Sana\'a Kayum, Dubai, Fashion, ` +
          `${product.article}, ` +
          `${product.description}`
        }
        url={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/product/${product.serialNumber}/${slugify(
          product.description
        )}`}
        color={product.color}
      />
      
      <ProductImageDescription
          spaceTopClass={isMobile ? "pt-10" : "pt-100"}
          spaceBottomClass={isMobile ? "pb-10" : "pb-100"}
          product={product}
        />
  
        
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product?product.description:""}
        />
  
       
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product?product.article:""}
        />
        </>
        :null)}
        
    
    </LayoutOne>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productData.products
  };
};
export default connect(mapStateToProps)(Product);


// export async function getStaticProps() {
// const res = await getProducts
// const products=await res.json()
//   return {
//     props: {products}, // will be passed to the page component as props
//     revalidate: 1, 
//   },
// }

// export async function getStaticPaths() {
//   const allProducts = await getProducts()
//   return {
//     paths: allProducts?.map(({ serialNumber,description }) => `/product/${serialNumber}/${slugify(description)}`) ?? [],
//     fallback: true,
//   }
// }
export async function getStaticPaths() {
  const paths = await getSlugs()
  return {
    paths,
    fallback: true,
  }
}
// : allProducts?.map(stage=> `products/${stage.serialNumber}/${slugify(stage.description)}`) ?? [],
export async function getStaticProps({params}) {
  
  const product=await getProducts().filter(
    single => single.serialNumber ===  params.pid 
  )[0]?? [];
  // const res = await fetch(`http://localhost:3000/product/${params.pid}/${params.slug}`)
  // const product = await res.json()
  return {
    props: {
      product   
    },
    revalidate: 1, 
  }
}



// export async function getServerSideProps() {
//   // Fetch data from external API
//   const products = await getProducts()
  
//   // Pass data to the page via props
//   return { props: { products } }
// }
