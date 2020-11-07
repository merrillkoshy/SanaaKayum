import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { fetchProducts, startClock } from "../actions";
import HeaderMeta from "../components/header/HeaderMeta";
import MetaTags from "react-meta-tags";
import { GA_TRACKING_ID } from "../constants/gtag";
import ReactGA from "react-ga";
import LayoutOne from "../layouts/LayoutOne";
import ProductSlider from "../wrappers/hero-slider/ProductSlider";
import CategoriesSlider from "../wrappers/hero-slider/CategoriesSlider";
import PromotionsSlider from "../wrappers/hero-slider/PromotionsSlider";
import { connect } from "react-redux";

const Index = props => {
  const initializeReactGA = () => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.pageview("/");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

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
        url={"https://sanaakayum.com"}
        color={"#000000"}
      />
      <MetaTags>{initializeReactGA}</MetaTags>

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

      <Link
        href={{
          pathname: "/[slug]",
          query: { slug: `some-route` }
        }}
      >
        <a>Test dynamic route</a>
      </Link>
    </>
  );
};

function mapStateToProps(state) {
  return { products: state.productData };
}
export default connect(mapStateToProps, { fetchProducts })(Index);
