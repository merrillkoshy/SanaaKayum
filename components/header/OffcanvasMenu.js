import PropTypes from "prop-types";
import React from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import HeaderSocial from "./sub-components/HeaderSocial";
import NavMenu from "./NavMenu";
import Link from "next/link";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import { Card } from "react-bootstrap";
import MobileWidgets from "./sub-components/MobileWidgets";

const OffcanvasMenu = () => {
  return (
    <div className="offcanvas-wrapper">
        <div className="offcanvas-inner-content">
          {/* mobile search */}
          <MobileMenuSearch />

          {/* mobile nav menu */}
          <MobileNavMenu />

          {/* mobile language and currency */}
          {/* <MobileLangCurChange /> */}
<>
<Card className="m-auto">
<Card.Img variant="top" src="/assets/img/banner/sk-corporate-clothing-banner.jpg" />
<Card.Body>
<Link href="/sk">
  <a>
      <Card.Title className="h6">Corporate Clothing | SK</Card.Title>
  </a>
  </Link>
  <Link href="/sk">
  <a >
      <Card.Text>
      Represent YOUR brand identity in style and comfort
      </Card.Text>
      </a>
      </Link>
    </Card.Body>
</Card>
</>
          {/* mobile widgets */}
          <MobileWidgets />
        </div>
      </div>
  );
};

OffcanvasMenu.propTypes = {
  activeState: PropTypes.bool,
  getActiveState: PropTypes.func
};

export default OffcanvasMenu;
