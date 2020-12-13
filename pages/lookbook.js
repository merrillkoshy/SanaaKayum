import { connect } from "react-redux";
import LookBookGrid from "../components/lookbook/LookBookGrid";
import LayoutOne from "../layouts/LayoutOne";
const LookBook = lookbooks => {
  return (
    <LayoutOne
      article={"Exquisite Wardrobe"}
      title={"Haute Couture & High-Street Fashion"}
      description={
        "Specialized in creating extremely intricate wardrobes, even for those with asymmetrical size dimensions."
      }
      image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
      keywords={`Sana\'a Kayum, Dubai, Fashion `}
      url={`${process.env.NEXT_PUBLIC_DOMAIN}/lookbook`}
      color={"#000000"}
      headerTop="visible"
      headerContainerClass="container-fluid"
      headerPaddingClass="header-padding-2"
    >
      <LookBookGrid items={lookbooks.lookbooks} />
    </LayoutOne>
  );
};

const mapStateToProps = state => {
  return {
    lookbooks: state.lookbookData.lookbooks
  };
};

export default connect(mapStateToProps)(LookBook);
