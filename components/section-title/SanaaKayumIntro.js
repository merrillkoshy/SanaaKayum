import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  console.log(
    "%cDesigned and Developed by \nMerrill Koshy Thomas\nGitHub: /merrillkoshy\nLinkedIn: /in/merrill-koshy-thomas/ ",
    "background: black; color: white; font-size: 16px"
  );

  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Sana'a Kayum</h1>
          <p>
            Sana’a Kayum Clothing Art is a Dubai based Haute Couture and High
            Street Fashion Boutique that has been serving the most gorgeous and
            stylish women of Dubai for the past 10 years. Owing much of our
            exponential commercial success just from referrals, we are grateful
            for the overwhelming response of our work and encouraging
            word-of-mouth. We have thrived in retaining our clientele because
            they love coming back for our exclusive creations and in-store
            shopping experience.{" "}
          </p>
          <p>
            Although our boutique stores feature stunning ready-to-wear
            collections in conservative styles ingeniously fused with the latest
            chic trends, we are called upon time and again to design bespoke
            apparel across a wide range of fitting requirements. From clients
            with regular sizes, to those with full figures or petite dimensions,
            and even expecting mothers in their third trimester, our specialist
            production team are groomed to craft the very best. Our most unique
            selling proposition is that we specialize in creating extremely
            intricate wardrobes, even for those with asymmetrical size
            dimensions.
          </p>
          <p>
            We do what we do because we truly believe in our brand statement.
            And that is to create a unique clothing experience for the
            sophisticated fashionista across all age and size categories. Come
            and have a look at our collections. You will find that every item
            that leaves our production floor celebrates the power of femininity,
            and exudes ultra-fine craftsmanship.
          </p>
        </div>
        <div className="welcome-content text-center pt-100 pb-95">
          <h5>Sana'a Kayum</h5>
          <h1>Meet The Designer</h1>
          <p>
            Sana’a has been applying design and aesthetics to wardrobes for over
            22 years, creating unique exquisite styles in a wide range of
            Ready-to-Wear and Made-to-Order categories. She is highly versatile
            and flexible in her approach, with in-depth knowledge and experience
            of contemporary, ethnic and modest fashion trends. She is driven by
            her passion for art-inspired clothing. Her signature creations have
            amassed traction from high net worth clientele spanning over 40
            nationalities.{" "}
          </p>
          <p>
            Sana’a gained her fashion designing credentials from Fashion
            Institute of Technology in New York, and a diploma in Apparel
            Manufacture & Design from SNDT University in Mumbai. She joined
            prominent fashion house ‘AJSK’ and worked under the tutelage of
            designers Abu Jani and Sandeep Khosla as an Assistant Designer and
            Quality Control Head for both their Mumbai and London branches. She
            has designed costumes for film celebrities to feature in Hindi
            feature films and Bollywood’s red-carpet events, assisted for
            extravagant high-profile weddings, and participated in annual
            couture show projects.{" "}
          </p>
          <p>
            Sana'a does what she does because of her belief in her brand
            statement. And that is to create a unique clothing experience for
            the sophisticated fashionista across all age and size categories.
            This is a profound claim because she guarantees that every item that
            leaves her production floor celebrates the power of femininity, and
            exudes ultrafine craftsmanship.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
