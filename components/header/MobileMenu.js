import React, { useEffect } from "react";
import MobileMenuSearch from "./sub-components/MobileSearch";
import MobileNavMenu from "./sub-components/MobileNavMenu";
import MobileWidgets from "./sub-components/MobileWidgets";
import { Card } from "react-bootstrap";
import Link from "next/link";

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="offcanvas-mobile-menu d-lg-none d-xl-none" id="offcanvas-mobile-menu">
      <button
        aria-label="menu-close"
        className="offcanvas-menu-close"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
        <i className="pe-7s-close"></i>
      </button>
      <div className="offcanvas-wrapper">
        <div className="offcanvas-inner-content">
          {/* mobile search */}
          <MobileMenuSearch />

          {/* mobile nav menu */}
          <MobileNavMenu />

          {/* mobile language and currency */}
          {/* <MobileLangCurChange /> */}
<>
<Card>
<Card.Img variant="top" src="/assets/img/banner/sk-corporate-clothing-banner.jpg" />
<Card.Body>
  <a href="/sk">
      <Card.Title className="h6">Corporate Clothing | SK</Card.Title>
  </a>
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
    </div>
  );
};

export default MobileMenu;
