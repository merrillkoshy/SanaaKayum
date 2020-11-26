import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderOne from "../wrappers/header/HeaderOne";
import Footer from "../wrappers/footer/Footer";
import Head from "next/head";
import siteIcons from "../constants/siteIcons";
const LayoutOne = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  article,
  title,
  description,
  image,
  keywords,
  url,
  color
}) => {
  return (
    <Fragment>
      <Head>
    
    <meta name="robots" content="index,follow" />
      {siteIcons}
      <title>{title}</title>
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}${url}`} />
      <base target="_blank" />
      <link href="https://images.ctfassets.net/" rel="dns-prefetch" />
      <meta
        name="description"
        property="description"
        itemProp="description"
        content={`${article}s by Sana'a Kayum | ${description}`}
      />
      <meta name="keywords"  property="keywords" content={keywords} />

      <meta name="theme-color" content={color} />
      {/* Open Graph */}
      <meta 
      name="og:title"
      property="og:title" content={description} />
      <meta
      name="og:description"
        property="og:description"
        content={`${article}s by Sana'a Kayum | ${description}`}
      />
      
       {/* Import CSS for nprogress */}
       {/* <link rel="stylesheet" type="text/css" href="/assets/css/nprogress.css" /> */}
      <meta name="og:image"  property="og:image" content={`${image}?fm=png&w=1200&h=627&f=center&fit=pad`} itemProp="image" />
      <meta name="og:type" content="website" />
      <meta name="og:url" property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}/${url}`} />
      <meta property="og:image:secure_url" name="og:image:secure_url" content={`${image}?fm=png&w=1200&h=627&f=center&fit=pad`} />
      <meta property="og:image:type"name="og:image:type" content="image/jpg" />
      <meta property="og:image:width"name="og:image:width" content="1200" />
      <meta property="og:image:height"name="og:image:height" content="627" />
      <meta property="og:image:alt" name="og:image:alt" content={description} />
      <meta property="og:site_name"name="og:site_name" content="Sana'a Kayum" />
      <meta property="og:locale"name="og:locale" content="en_US" />
      <meta property="og:type"name="og:type" content="website" />
      <meta itemProp="name" content={description + " | Sana'a Kayum"} />
      

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content="app" />
      <meta name="twitter:site" content="@SKClothingart" />
      <meta name="twitter:creator" content="@SKClothingart" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={`${article}s by Sana'a Kayum | ${description}`}
      />
      <meta name="twitter:app:country" content="ae" />
      <meta name="twitter:image" content={`${image}?fm=png&w=1200&h=627&f=center&fit=pad`} />
      </Head>

      <HeaderOne
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
      />
      {children}
      <Footer
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.any,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default LayoutOne;
