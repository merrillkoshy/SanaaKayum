import Link from "next/link";

import HeaderMeta from "../components/header/HeaderMeta";
import MetaTags from "react-meta-tags";

import ReactGA from "react-ga";
import LayoutOne from "../layouts/LayoutOne";
import ProductSlider from "../wrappers/hero-slider/ProductSlider";
import CategoriesSlider from "../wrappers/hero-slider/CategoriesSlider";
import PromotionsSlider from "../wrappers/hero-slider/PromotionsSlider";
import { connect } from "react-redux";

const Index = props => {
  

  return (
    <>
      <HeaderMeta
        article={"Exquisite Wardrobe"}
        title={"Haute Couture & High-Street Fashion"}
        description={
          "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        }
        image={"https://sanaakayum.com/assets/pwa/icons/icon-512x512.png"}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={""}
        color={"#000000"}
        
      />
      

      {/* <Examples /> */}
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <PromotionsSlider />

        {/* sliders  */}
        <CategoriesSlider />
        <ProductSlider />

        {/* <PromoBanner spaceTopClass="pt-100" spaceBottomClass="pb-100" /> */}
        {/* tab product */}
      </LayoutOne>

      
    </>
  );
};

function mapStateToProps(state) {
  return { products: state.productData };
}
export default connect(mapStateToProps)(Index);
