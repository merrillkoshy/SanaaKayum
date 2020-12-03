import LayoutOne from "../layouts/LayoutOne";
import ProductSlider from "../wrappers/hero-slider/ProductSlider";
import CategoriesSlider from "../wrappers/hero-slider/CategoriesSlider";
import PromotionsSlider from "../wrappers/hero-slider/PromotionsSlider";
import { connect } from "react-redux";

const Index = props => {
  return (
    <>
      <LayoutOne
        article={"Exquisite Wardrobe"}
        title={"Haute Couture & High-Street Fashion"}
        description={
          "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
        }
        image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={"https://sanaakayum.com"}
        color={"#000000"}
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <PromotionsSlider />

        {/* button slider  */}
        <CategoriesSlider />
        {/* infinite cats slider  */}
        <ProductSlider />
      </LayoutOne>
    </>
  );
};

function mapStateToProps(state) {
  return { products: state.productData };
}
export default connect(mapStateToProps)(Index);
