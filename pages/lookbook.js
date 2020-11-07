import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import LookbookHeader from "../wrappers/header/LookbookHeader";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { isSafari } from "react-device-detect";

const Lookbook = ({
  lookbook,
  headerContainerClass,
  headerTop,
  headerPaddingClass
}) => {
  const [show, setShow] = useState(false);
  const [flatterWord, setFlatter] = useState("Beautiful");
  const [verb, setVerb] = useState("donning");
  const [lkbkChild, setLbVal] = useState(0);
  var vowels = ["A", "E", "I", "O", "U"];
  const getRandomIndex = max => {
    return (Math.random() * max) | 0;
  };
  const flatter = () => {
    var flatterWords = ["Beautiful", "Gorgeous", "Charming", "Elegant"];
    var flatterWordsLength = flatterWords.length;
    setFlatter(flatterWords[getRandomIndex(flatterWordsLength)]);
  };
  const verbBank = () => {
    var dressingVerb = [
      "donning",
      "rocking",
      "enrobed in",
      "stuns in",
      "adorns"
    ];
    var dressingVerbLength = dressingVerb.length;
    setVerb(dressingVerb[getRandomIndex(dressingVerbLength)]);
  };
  const handleClose = () => setShow(false);
  const fetchLbIndex = lbi => setLbVal(lbi);
  const handleShow = () => setShow(true);

  var lookbookMasonry = lookbook.map(function(lb, i) {
    return (
      <div
        className={`grid-item grid-item-${i + 1} ${
          i % 3 ? (i % 2 ? "span-2" : "span-3") : ""
        } ${i % 2 ? "span-2" : ""}`}
        key={lb.id}
      >
        <div
          className={"product-wrap"}
          onClick={() => {
            verbBank();
            flatter();
            handleShow();
            fetchLbIndex(i);
          }}
        >
          <div className="product-img">
            <img
              className="default-img"
              itemProp="image"
              alt={lb.collectionName}
              loading="lazy"
              title={lb.collectionName + " " + lb.article + " by Sana'a Kayum"}
              src={
                !isSafari
                  ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                    lb.image[0].fields.file.url
                  : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                      lb.image[0].fields.file.url}?fm=jpg`
              }
            />

            {lb.image.length > 1 ? (
              <img
                className="hover-img"
                itemProp="image"
                alt={lb.collectionName}
                loading="lazy"
                title={
                  lb.collectionName + " " + lb.article + " by Sana'a Kayum"
                }
                src={
                  !isSafari
                    ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                      lb.image[1].fields.file.url
                    : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                        lb.image[1].fields.file.url}?fm=jpg`
                }
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <LookbookHeader
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
      />

      <div className="lookbook-wrapper">
        <div className="grid-layout">{lookbookMasonry}</div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row mx-5">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className={"product-wrap"}>
                <div className="product-img">
                  <img
                    className="default-img"
                    itemProp="image"
                    alt={lookbook[lkbkChild].collectionName}
                    loading="lazy"
                    title={
                      lookbook[lkbkChild].collectionName +
                      " " +
                      lookbook[lkbkChild].article +
                      " by Sana'a Kayum"
                    }
                    src={
                      !isSafari
                        ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                          lookbook[lkbkChild].image[0].fields.file.url
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            lookbook[lkbkChild].image[0].fields.file
                              .url}?fm=jpg`
                    }
                  />

                  {lookbook[lkbkChild].image.length > 1 ? (
                    <img
                      className="hover-img"
                      itemProp="image"
                      alt={lookbook[lkbkChild].collectionName}
                      loading="lazy"
                      title={
                        lookbook[lkbkChild].collectionName +
                        " " +
                        lookbook[lkbkChild].article +
                        " by Sana'a Kayum"
                      }
                      src={
                        !isSafari
                          ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                            lookbook[lkbkChild].image[1].fields.file.url
                          : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                              lookbook[lkbkChild].image[1].fields.file
                                .url}?fm=jpg`
                      }
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="details-wrapper">
                <h5 className="collection-name">
                  {lookbook[lkbkChild].collectionName} Collection by Sana'a
                  Kayum
                </h5>
                <h6 className="article-name">{lookbook[lkbkChild].article}</h6>
                <p className="description">
                  {" " + lookbook[lkbkChild].clientName + " "}
                  {verb}{" "}
                  {vowels.indexOf(
                    lookbook[lkbkChild].description.split(" ")[0][0]
                  ) != -1
                    ? " an " + lookbook[lkbkChild].description
                    : " a " + lookbook[lkbkChild].description}
                </p>

                {/* <div className="about-client">
                  <h5 className="client-name">
                    {lookbook[lkbkChild].clientName}
                  </h5>
                  <h6 className="abt-client">
                    {lookbook[lkbkChild].aboutClient}
                  </h6>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col "></div>
            <div className="col span-3 text-center">
              <Link
                to={
                  process.env.NEXT_PUBLIC_PUBLIC_URL +
                  "shop?search=" +
                  lookbook[lkbkChild].collectionName.toLowerCase()
                }
              >
                <button className="stlBtn">Shop The Look</button>
              </Link>
            </div>
            <div className="col"></div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

Lookbook.propTypes = {
  lookbook: PropTypes.array,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerTop: PropTypes.string
};

const mapStateToProps = state => {
  return {
    lookbook: state.lookbookData.lookbooks
  };
};

export default connect(mapStateToProps)(Lookbook);
