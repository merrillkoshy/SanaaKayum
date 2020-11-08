import {connect} from "react-redux";
import HeaderMeta from "../components/header/HeaderMeta";
import LookbookHeader from "../wrappers/header/LookbookHeader";
import LookBookGrid from "../components/lookbook/LookBookGrid"
const LookBook=(lookbooks)=>{
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
<LookbookHeader
        layout={"container-fluid"}
        top={"visible"}
        headerPaddingClass={"header-padding-2"}
      />
<LookBookGrid items={lookbooks.lookbooks}/>
 </>
  )
}

const mapStateToProps = state => {
  return {
    lookbooks: state.lookbookData.lookbooks
  };
};

export default connect(mapStateToProps)(LookBook);
