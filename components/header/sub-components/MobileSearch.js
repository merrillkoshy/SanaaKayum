import React from "react";
import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";

const MobileSearch = () => {
  const router = useRouter();
  return (
    <div className="offcanvas-mobile-search-area">
      <form
        onSubmit={e => {
          e.preventDefault();
          router.push(
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
