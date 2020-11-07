import React from "react";
import { useHistory } from "react-router-dom";

const MobileSearch = () => {
  const history = useHistory();
  return (
    <div className="offcanvas-mobile-search-area">
      <form
        onSubmit={e => {
          e.preventDefault();
          history.push(
            "/shop?search=" + document.querySelector("#searchHomeMobile").value
          );
        }}
      >
        <input id="searchHomeMobile" type="search" placeholder="Search ..." />
        <button aria-label="search-button" type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  );
};

export default MobileSearch;
