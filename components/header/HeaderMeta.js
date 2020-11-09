import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Head from 'next/head'
const HeaderMeta = ({
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
    
      <title>{title}</title>
      <link rel="canonical" href={`https://sanaakayum.com${url}`} />
      <base target="_blank" href={process.env.NEXT_PUBLIC_PUBLIC_URL} />
      <link href="https://images.ctfassets.net/" rel="dns-prefetch" />
      <meta
        property="Description"
        content={`${article}s by Sana'a Kayum | ${description}`}
      />
      <meta name="Keywords" content={keywords} />

      <meta name="theme-color" content={color} />
      {/* Open Graph */}
      <meta property="og:title" content={description} />
      <meta
        property="og:description"
        content={`${article}s by Sana'a Kayum | ${description}`}
      />
      <meta name="og:title" content={description} />
      <meta
        name="og:description"
        content={`${article}s by Sana'a Kayum | ${description}`}
      />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`https://sanaakayum.com${url}`} />
      <meta name="og:image:secure_url" content={image} />
      <meta name="og:image:type" content="image/jpg" />
      <meta name="og:image:width" content="200" />
      <meta name="og:image:height" content="200" />
      <meta name="og:image:alt" content={description} />
      <meta name="og:site_name" content="Sana'a Kayum" />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`https://sanaakayum.com${url}`} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:image:alt" content={description} />
      <meta property="og:site_name" content="Sana'a Kayum" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />

      <meta itemProp="name" content={description + " | Sana'a Kayum"} />
      <meta
        itemProp="description"
        content={`${article}s by Sana'a Kayum | ${description}`}
      />
      <meta itemProp="image" content={image} />

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
      <meta name="twitter:image" content={image} />
      </Head>
      </Fragment> 
  );
};

export default HeaderMeta;
