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
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="robots" content="index,follow" />
    
    <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-57x57.png`}
        />
        <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-114x114.png`}
        />
        <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-72x72.png`}
        />
        <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-144x144.png`}
        />
        <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-60x60.png`}
        />
        <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-120x120.png`}
        />
        <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-76x76.png`}
        />
        <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/apple-touch-icon-152x152.png`}
        />
        <link
        rel="apple-touch-startup-image"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
        rel="apple-touch-startup-image"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
        rel="apple-touch-startup-image"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
        media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
        rel="apple-touch-startup-image"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
        />
        <link
        rel="apple-touch-startup-image"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
        media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
        rel="apple-touch-startup-image"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
        media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
        rel="apple-touch-startup-image"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-512x512.png`}
        media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
        />
        <link
        rel="icon"
        type="image/png"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-192x192.png`}
        sizes="196x196"
        />
        <link
        rel="icon"
        type="image/png"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-96x96.png`}
        sizes="96x96"
        />
        <link
        rel="icon"
        type="image/png"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-96x96.png`}
        sizes="32x32"
        />
        <link
        rel="icon"
        type="image/png"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-96x96.png`}
        sizes="16x16"
        />
        <link
        rel="icon"
        type="image/png"
        href={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/pwa/icons/icon-128x128.png`}
        sizes="128x128"
        />
        <meta name="application-name" content="Sana'a Kayum Clothing Art" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
        name="msapplication-TileImage"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/mstile-144x144.png`}
        />
        <meta
        name="msapplication-square70x70logo"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/mstile-70x70.png`}
        />
        <meta
        name="msapplication-square150x150logo"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/mstile-150x150.png`}
        />
        <meta
        name="msapplication-wide310x150logo"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/mstile-310x150.png`}
        />
        <meta
        name="msapplication-square310x310logo"
        content={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/favicon/mstile-310x310.png`}
        />
        <meta
        name="google-site-verification"
        content="OVmO0w-97PRRrWbi_rbDu2vC1PWdDBQDLvsXtOaSLn0"
        />
        
        <link rel="manifest" href={`${process.env.NEXT_PUBLIC_DOMAIN}/manifest.json`} />
        
        <meta name="mobile-web-app-capable" content="yes" />
        
        <meta name="apple-mobile-web-app-capable" content="yes" />
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
      <meta name="og:image"  property="og:image" content={`${image}`} itemProp="image" />
      <meta name="og:type" content="website" />
      <meta name="og:url" property="og:url" content={`${process.env.NEXT_PUBLIC_DOMAIN}/${url}`} />
      <meta property="og:image:secure_url" name="og:image:secure_url" content={`${image}`} />
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
      <meta name="twitter:image" content={`${image}`} />
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
