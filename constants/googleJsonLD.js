export const COMPANY_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "Sana'a Kayum Clothing Art",
  "potentialAction": {
    "@type": "SearchAction",
    "target": process.env.NEXT_PUBLIC_DOMAIN+"/shop?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "209, Al Asmawi Building, Umm Al Sheif, Sheikh Zayed Road",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "114127"
  },
  "image": process.env.NEXT_PUBLIC_DOMAIN+"/assets/pwa/icons/icon-512x512.png",
  "email": "Hello@SanaaKayum.com",
  "telePhone": "+971523331757",
  "url": process.env.NEXT_PUBLIC_DOMAIN,
  "paymentAccepted": [ "cash", "check", "credit card", "invoice" ],
  "openingHours": "Mo,Tu,We,Th,Sa,Su 10:00-20:00",
  "openingHoursSpecification": [ {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "20:00"
  } ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.125350",
    "longitude": "55.203445"
  },
  "priceRange":"$$"
};
export const ORG_DET = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": process.env.NEXT_PUBLIC_DOMAIN,
  "logo": process.env.NEXT_PUBLIC_DOMAIN+"/assets/pwa/icons/icon-512x512.png"
};

export const googleHead = 
    {
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      "name": "Sana'a Kayum",
      "potentialAction": {
        "@type": "SearchAction",
        "target": process.env.NEXT_PUBLIC_DOMAIN+"/shop?search={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      "@id": "https://g.page/Sana-kayum",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "209, Al Asmawi Building, Umm Al Sheif, Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "114127",
        "addressCountry": "AE"
      },
      "image": process.env.NEXT_PUBLIC_DOMAIN+"/assets/pwa/icons/icon-512x512.png",
      "email": "Hello@SanaaKayum.com",
      "telePhone": "+971523331757",
      "url": process.env.NEXT_PUBLIC_DOMAIN,
      "paymentAccepted": ["cash", "check", "credit card", "invoice"],
      "openingHours": "Mo,Tu,We,Th,Sa,Su 9:30-19:30",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Saturday",
            "Sunday"
          ],
          "opens": "9:30",
          "closes": "19:30"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.1253635",
        "longitude": "55.2033495"
      },
      "priceRange": "$$"
    }
    
    export const socialMedia=
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sana'a Kayum",
      "legalName": "Sana'a Kayum Clothing Art L.L.C",
      "url": process.env.NEXT_PUBLIC_DOMAIN,
      "logo": process.env.NEXT_PUBLIC_DOMAIN+"/assets/pwa/icons/icon-512x512.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "209, Al Asmawi Building, Umm Al Sheif, Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "114127",
        "addressCountry": "AE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Care",
        "telephone": "[+971-52-333-1757]",
        "email": "Hello@sanaakayum.com"
      },
      
      "sameAs": [
        "https://g.page/Sana-kayum",
        "https://www.facebook.com/SanaaKayum",
        "https://www.instagram.com/sanaa_kayum",
        "https://twitter.com/SKClothingart",
        "https://www.linkedin.com/company/sanaa-kayum",
        "https://www.pinterest.com/sanaakayumhc"
      ]
    }
    
   export const localBusiness=
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Sana'a Kayum",
      "hasMap": "https://maps.google.com/maps?cid=15901352452706984030",
      "image": `${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "209, Al Asmawi Building, Umm Al Sheif, Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "114127",
        "addressCountry": "AE"
      },
      "priceRange": "$$",
      "telephone": "+971523331757"
    }
    

export const analytics = `
    (function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );
    
    ga("create", "UA-158075339-1", "auto");
    ga("send", "pageview");
    </script>
    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-W6DG8FT">`;
