import React from "react";

const productsGoogleJsonLD = ({}) => {
  const data = {
    "@context": "http://json-ld.org/contexts/person.jsonld",
    "@id": "http://dbpedia.org/resource/John_Lennon",
    name: "John Lennon",
    born: "1940-10-09",
    spouse: "http://dbpedia.org/resource/Cynthia_Lennon"
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default productsGoogleJsonLD;
