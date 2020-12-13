import React, { Fragment } from "react";
import Link from "next/link";
import LayoutOne from "../layouts/LayoutOne";

import { useRouter } from "next/router";
const NotFound = ({}) => {
  const router = useRouter();
  return (
    <Fragment>
      <LayoutOne
        article={"Exquisite Wardrobe"}
        title={"404? That's unstitched.."}
        description={"404? That's unstitched.."}
        image={`${process.env.NEXT_PUBLIC_DOMAIN}/assets/meta-img/skstore.jpg`}
        keywords={`Sana\'a Kayum, Dubai, Fashion `}
        url={"https://sanaakayum.com"}
        color={"#000000"}
        headerTop="visible"
      >
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>OOPS! PAGE NOT FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarity unavailable.
                  </p>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      router.push(
                        "/shop?search=" +
                          document.querySelector("#error_search").value
                      );
                    }}
                    className="searchform mb-50"
                  >
                    <input
                      type="text"
                      name="search"
                      id="error_search"
                      placeholder="Search..."
                      className="searchform__input"
                    />
                    <button type="submit" className="searchform__submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                  <Link href={process.env.RAZZLE_PUBLIC_URL + "/"}>
                    <a className="error-btn">Back to home page</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};


export default NotFound;
