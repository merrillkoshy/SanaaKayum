import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
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
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
