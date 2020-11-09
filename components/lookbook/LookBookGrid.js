import React,{ Fragment,useState,useEffect } from "react";
import { isSafari } from "react-device-detect";
import Modal from "react-bootstrap/Modal";
import Link from "next/link"
const LookBookGrid=props=>{
    const { items } = props;
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
      return flatterWords[getRandomIndex(flatterWordsLength)]
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

    const handleShow = () => setShow(true);
    const [comp, setComp] = useState("")
    useEffect(() =>{
        setFlatter(flatter());
        setComp(items.map((item,i)=>{
    return (
    < Fragment key={item.id}>
    <div
        className={`grid-item grid-item-${i + 1} ${
          i % 3 ? (i % 2 ? "span-2" : "span-3") : ""
        } ${i % 2 ? "span-2" : ""}`}
        
      >
          <div
          className={"product-wrap"}
          onClick={() => {
              console.log('click recorded')
            verbBank();
            flatter();
            handleShow();
            setLbVal(item)
            
          }}
        >
           <div className="product-img">
            <img
              className="default-img"
              itemProp="image"
              alt={item.collectionName}
              loading="lazy"
              title={item.collectionName + " " + item.article + " by Sana'a Kayum"}
              src={
                !isSafari
                  ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                    item.image[0].fields.file.url
                  : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                      item.image[0].fields.file.url}?fm=jpg`
              }
            />

            {item.image.length > 1 ? (
              <img
                className="hover-img"
                itemProp="image"
                alt={item.collectionName}
                loading="lazy"
                title={
                  item.collectionName + " " + item.article + " by Sana'a Kayum"
                }
                src={
                  !isSafari
                    ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                      item.image[1].fields.file.url
                    : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                        item.image[1].fields.file.url}?fm=jpg`
                }
              />
            ) : (
              ""
            )}
          </div>
          </div>
      
      </div>
      </Fragment>
      )
})   )
        
      },[items]);
return comp ? 
<>
<div className="lookbook-wrapper">
<div className="grid-layout">{comp}</div>
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
                    alt={lkbkChild?lkbkChild.collectionName:""}
                    loading="lazy"
                    title={`${lkbkChild?lkbkChild.collectionName:""}${lkbkChild?lkbkChild.article:""} by Sana'a Kayum`}
                    src={
                        lkbkChild.images?
                      !isSafari
                        ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                          lkbkChild.images[0].fields.file.url
                        : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                            lkbkChild.images[0].fields.file
                              .url}?fm=jpg`:""
                    }
                  />

                  {lkbkChild.images && lkbkChild.image.length > 1 ? (
                    <img
                      className="hover-img"
                      itemProp="image"
                      alt={lkbkChild.collectionName}
                      loading="lazy"
                      title={
                        lkbkChild.collectionName +
                        " " +
                        lkbkChild.article +
                        " by Sana'a Kayum"
                      }
                      src={
                        lkbkChild.images?
                        !isSafari
                          ? process.env.NEXT_PUBLIC_PUBLIC_URL +
                            lkbkChild.images[1].fields.file.url
                          : `${process.env.NEXT_PUBLIC_PUBLIC_URL +
                              lkbkChild.images[1].fields.file
                                .url}?fm=jpg`:""
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
                  {lkbkChild.collectionName} Collection by Sana'a
                  Kayum
                </h5>
                <h6 className="article-name">{lkbkChild.article}</h6>
                <p className="description">
                  {" " + lkbkChild.clientName + " "}
                  {verb}{" "}
                  {lkbkChild.description?vowels.indexOf(
                    lkbkChild.description.split(" ")[0][0]
                  ) != -1
                    ? " an " + lkbkChild.description
                    : " a " + lkbkChild.description:""}
                </p>

                {/* <div className="about-client">
                  <h5 className="client-name">
                    {lkbkChild.clientName}
                  </h5>
                  <h6 className="abt-client">
                    {lkbkChild.aboutClient}
                  </h6>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col "></div>
            <div className="col span-3 text-center">
              <Link
                href={
                    lkbkChild.collectionName?
                  process.env.NEXT_PUBLIC_PUBLIC_URL +
                  "shop?search=" +
                  lkbkChild.collectionName.toLowerCase():"'"
                }
              >
                <button className="stlBtn">Shop The Look</button>
              </Link>
            </div>
            <div className="col"></div>
          </div>
        </Modal.Body>
      </Modal>
</div> 

</>
: "";


}
export default LookBookGrid