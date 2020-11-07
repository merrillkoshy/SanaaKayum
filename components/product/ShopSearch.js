import React from "react";
import { setActiveSort } from "../../helpers/product";
import { useHistory } from "react-router-dom";
// import { document } from "ssr-window";
import { isMobile } from "react-device-detect";

const ShopSearch = ({ categories, getSortParams }) => {
  const history = useHistory();
  return (
    <div className="sidebar-widget">
      <div
        className={`pro-sidebar-search ${isMobile ? "mb-1" : "mb-50"} mt-25`}
      >
        <form
          onSubmit={e => {
            // `https://cdn.contentful.com/spaces/${process.env.RAZZLE_SPACE_ID}/entries?access_token=${process.env.RAZZLE_KEY}&sys.contentType.sys.id[in]=cat,dog`;
            e.preventDefault();
            getSortParams(
              "query",
              document.querySelector("#searchSideBar").value
            );
            setActiveSort(e);
            // history.push(
            //   "/shop?search=" + document.querySelector("#searchSideBar").value
            // );
          }}
          className="pro-sidebar-search-form"
        >
          <input id="searchSideBar" type="text" placeholder="Search here..." />
          <button>
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
