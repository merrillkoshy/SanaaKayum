import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { useHistory } from "react-router-dom";

const NotFound = ({ location }) => {
  const { pathname } = location;
  const history = useHistory();
  return (
    <Fragment>
      <MetaTags>
        <title>404: Thats unstitched</title>
        <meta name="description" content="404 Not found" />
      </MetaTags>
      <BreadcrumbsItem to={process.env.RAZZLE_PUBLIC_URL + "/"}>
        Home
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.RAZZLE_PUBLIC_URL + pathname}>
        404 page
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1>404</h1>
                  <h2>OPPS! PAGE NOT FOUND</h2>
                  <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed, name changed or is temporarity unavailable.
                  </p>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      history.push(
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
                  <Link
                    to={process.env.RAZZLE_PUBLIC_URL + "/"}
                    className="error-btn"
                  >
                    Back to home page
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

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;