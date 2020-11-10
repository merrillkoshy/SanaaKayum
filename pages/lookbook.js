import {connect} from "react-redux";
import HeaderMeta from "../components/header/HeaderMeta";
import LookbookHeader from "../wrappers/header/LookbookHeader";
import LookBookGrid from "../components/lookbook/LookBookGrid"
import LayoutOne from "../layouts/LayoutOne";
const LookBook=(lookbooks)=>{
  return (
    <LayoutOne
    headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
        >
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

<LookBookGrid items={lookbooks.lookbooks}/>
 
 </LayoutOne>
  )
}

const mapStateToProps = state => {
  return {
    lookbooks: state.lookbookData.lookbooks
  };
};

export default connect(mapStateToProps)(LookBook);
