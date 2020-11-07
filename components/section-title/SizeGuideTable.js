import PropTypes from "prop-types";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import SizerSvg from "../../helpers/SizerSvg";
import { Container } from "react-bootstrap";

const SizeGuideTable = ({ spaceTopClass, spaceBottomClass }) => {
  var UK4 = {
    bust: [29.5, 30.5],
    waist: [22.5, 23.5],
    hips: [31.5, 32.5]
  };
  var UK6 = {
    bust: [30.6, 31.5],
    waist: [23.6, 24.5],
    hips: [32.6, 33.5]
  };
  var UK8 = {
    bust: [31.6, 33],
    waist: [24.6, 26],
    hips: [33.6, 35]
  };
  var UK10 = {
    bust: [33.1, 35],
    waist: [26.1, 28],
    hips: [35.1, 37]
  };
  var UK12 = {
    bust: [35.1, 37],
    waist: [28.1, 30],
    hips: [37.1, 39]
  };
  var UK14 = {
    bust: [37.1, 39],
    waist: [30.1, 32],
    hips: [39.1, 41]
  };
  var UK16 = {
    bust: [39.1, 41],
    waist: [32.1, 34],
    hips: [41.1, 43.5]
  };
  var UK18 = {
    bust: [41.1, 43],
    waist: [34.1, 36],
    hips: [43.6, 46]
  };
  var UK20 = {
    bust: [43.1, 45.5],
    waist: [36.1, 38.5],
    hips: [46.1, 48.5]
  };
  var UK22 = {
    bust: [45.6, 47],
    waist: [38.6, 41],
    hips: [48.6, 51]
  };
  var _bust = {
    XS: [UK4.bust, UK6.bust],
    S: [UK8.bust, UK10.bust],
    M: [UK12.bust, UK14.bust],
    L: [UK16.bust, UK18.bust],
    XL: [UK20.bust, UK22.bust]
  };
  var _waist = {
    XS: [UK4.waist, UK6.waist],
    S: [UK8.waist, UK10.waist],
    M: [UK12.waist, UK14.waist],
    L: [UK16.waist, UK18.waist],
    XL: [UK20.waist, UK22.waist]
  };
  var _hips = {
    XS: [UK4.hips, UK6.hips],
    S: [UK8.hips, UK10.hips],
    M: [UK12.hips, UK14.hips],
    L: [UK16.hips, UK18.hips],
    XL: [UK20.hips, UK22.hips]
  };
  const isBetween = (n, sizeArray) => {
    return (n - sizeArray[0]) * (n - sizeArray[1]) <= 0;
  };

  const [valueBust, calculatedValueBust] = useState([]);
  const [valueHips, calculatedValueHips] = useState([]);
  const [valueWaist, calculatedValueWaist] = useState([]);

  const clearVals = () => {
    setShow(false);
    setVp(
      "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5s41.8,6,72.6,6.3s93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5c16.3-3,64.9-17.5,71.7-19    c0,0-30.3-132.3-56.3-219.2s-92-230-94.6-238.9s-2.7-21.3-2.7-21.3s7.5-94,8.6-100.9c0.1-0.4,0.2-0.8,0.3-1.2    c-8-14.2-15.5-31.3-33.2-30.2s-45.3,4-55.8,4s-49.9-0.4-62.6,2.2c-12.7,2.5-23.1,21.4-23.5,26.1c-0.5,4.7,4.1,11.3,5.6,14.7    c4.9,11.2,14.7,82.1,15.3,91.9s-5.6,29.1-5.6,29.1s-30.8,80.1-56.9,143.1S10.7,755.1,10.7,755.1z"
    );
    calculatedValueBust([]);
    calculatedValueHips([]);
    calculatedValueWaist([]);
  };
  const resizeSvg = waistSize => {
    switch (waistSize) {
      case "XS":
        setVp(
          "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5s41.8,6,72.6,6.3s93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5c16.3-3,64.9-17.5,71.7-19    c0,0-56.5-133.5-82.5-220.4s-75.1-228.9-77.7-237.8s-1.2-19.6-1.2-19.6s6.3-80.8,7.4-87.7c0.1-0.4,1.9-11.4,0.4-17.3    c-4.1-15.8-6.6-30-24.3-28.9s-45.3,4-55.8,4s-49.9-0.4-62.6,2.2c-12.7,2.5-13.6,21.3-14,26c-0.5,4.7,2,13.9,3.5,17.3    c4.9,11.2,16.8,78.7,17.4,88.5s-6.9,32.8-6.9,32.8s-18.9,79.7-45,142.7S10.7,755.1,10.7,755.1z"
        );
        break;
      case "S":
        setVp(
          "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5s41.8,6,72.6,6.3s93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5c16.3-3,64.9-17.5,71.7-19    c0,0-41.6-131.8-67.6-218.7s-90-230.6-92.6-239.5s-1.2-19.6-1.2-19.6s12.1-83.2,13.2-90.1c0.1-0.4,0.7-8.3-0.9-14.1    c-4.1-15.8-11.2-30.8-28.9-29.7s-45.3,4-55.8,4s-49.9-0.4-62.6,2.2c-12.7,2.5-17.9,21-18.3,25.7c-0.5,4.7-1.1,11.7,0.4,15.1    c4.9,11.2,24.2,81.2,24.8,91s-6.9,32.8-6.9,32.8s-31.5,79.7-57.6,142.7S10.7,755.1,10.7,755.1z"
        );
        break;
      case "M":
        setVp(
          "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5c23.6-2.3,41.8,6,72.6,6.3c30.8,0.3,93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5    c16.3-3,64.9-17.5,71.7-19c0,0-30.3-132.3-56.3-219.2s-101.3-230.1-103.9-239c-2.6-8.9-1.2-19.6-1.2-19.6s15.3-95.6,16.4-102.5    c0.1-0.4,0.2-0.8,0.3-1.2c-8-14.2-15.5-31.3-33.2-30.2c-17.7,1.1-45.3,4-55.8,4c-10.5,0-49.9-0.4-62.6,2.2    c-12.7,2.5-23.1,21.4-23.5,26.1c-0.5,4.7,4.1,11.3,5.6,14.7c4.9,11.2,24.2,81.2,24.8,91c0.6,9.8-6.9,32.8-6.9,32.8    s-39,77.3-65.1,140.3S10.7,755.1,10.7,755.1z"
        );
        break;
      case "L":
        setVp(
          "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5s41.8,6,72.6,6.3s93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5c16.3-3,64.9-17.5,71.7-19    c0,0-30.3-132.3-56.3-219.2s-97.2-230-99.8-238.9s-0.8-19.5-0.8-19.5S299.9,189,301,182.1c0.1-0.4,0.2-0.8,0.3-1.2    c-8-14.2-15.5-31.3-33.2-30.2s-45.3,4-55.8,4s-49.9-0.4-62.6,2.2c-12.7,2.5-23.1,21.4-23.5,26.1c-0.5,4.7,4.1,11.3,5.6,14.7    c4.9,11.2,14.7,79.1,15.3,88.9s0.4,26.6-1.3,35.1c-7.4,37.9-35.1,77-61.2,140S10.7,755.1,10.7,755.1z"
        );
        break;
      case "XL":
        setVp(
          "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5s41.8,6,72.6,6.3s93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5c16.3-3,64.9-17.5,71.7-19    c0,0-30.3-132.3-56.3-219.2s-92-230-94.6-238.9s-2.7-27.6-2.7-27.6s7.5-87.7,8.6-94.6c0.1-0.4,0.2-0.8,0.3-1.2    c-8-14.2-15.5-31.3-33.2-30.2s-45.3,4-55.8,4s-49.9-0.4-62.6,2.2c-12.7,2.5-23.1,21.4-23.5,26.1c-0.5,4.7,4.1,11.3,5.6,14.7    c4.9,11.2,11.3,80.5,11.9,90.3s-0.5,25.7-2.2,34.3c-7.4,37.9-30.8,76.6-56.9,139.6S10.7,755.1,10.7,755.1z"
        );
        break;
      default:
        setVp(
          "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5s41.8,6,72.6,6.3s93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5c16.3-3,64.9-17.5,71.7-19    c0,0-30.3-132.3-56.3-219.2s-92-230-94.6-238.9s-2.7-21.3-2.7-21.3s7.5-94,8.6-100.9c0.1-0.4,0.2-0.8,0.3-1.2    c-8-14.2-15.5-31.3-33.2-30.2s-45.3,4-55.8,4s-49.9-0.4-62.6,2.2c-12.7,2.5-23.1,21.4-23.5,26.1c-0.5,4.7,4.1,11.3,5.6,14.7    c4.9,11.2,14.7,82.1,15.3,91.9s-5.6,29.1-5.6,29.1s-30.8,80.1-56.9,143.1S10.7,755.1,10.7,755.1z"
        );
    }
  };
  const compute = () => {
    clearVals();
    var bust = document.querySelector("#bust").value;
    var hips = document.querySelector("#hips").value;
    var waist = document.querySelector("#waist").value;
    if (bust) {
      isBetween(bust, _bust.XS[0])
        ? calculatedValueBust({ ukSize: "UK4", skcaSize: "XS" })
        : isBetween(bust, _bust.XS[1])
        ? calculatedValueBust({ ukSize: "UK6", skcaSize: "XS" })
        : isBetween(bust, _bust.S[0])
        ? calculatedValueBust({ ukSize: "UK8", skcaSize: "S" })
        : isBetween(bust, _bust.S[1])
        ? calculatedValueBust({ ukSize: "UK10", skcaSize: "S" })
        : isBetween(bust, _bust.M[0])
        ? calculatedValueBust({ ukSize: "UK12", skcaSize: "M" })
        : isBetween(bust, _bust.M[1])
        ? calculatedValueBust({ ukSize: "UK14", skcaSize: "M" })
        : isBetween(bust, _bust.L[0])
        ? calculatedValueBust({ ukSize: "UK16", skcaSize: "L" })
        : isBetween(bust, _bust.L[1])
        ? calculatedValueBust({ ukSize: "UK18", skcaSize: "L" })
        : isBetween(bust, _bust.XL[0])
        ? calculatedValueBust({ ukSize: "UK20", skcaSize: "XL" })
        : isBetween(bust, _bust.XL[1])
        ? calculatedValueBust({ ukSize: "UK22", skcaSize: "SXL" })
        : calculatedValueBust({ ukSize: "MTO", skcaSize: "MTO" });
    }
    if (hips) {
      isBetween(hips, _hips.XS[0])
        ? calculatedValueHips({ ukSize: "UK4", skcaSize: "XS" })
        : isBetween(hips, _hips.XS[1])
        ? calculatedValueHips({ ukSize: "UK6", skcaSize: "XS" })
        : isBetween(hips, _hips.S[0])
        ? calculatedValueHips({ ukSize: "UK8", skcaSize: "S" })
        : isBetween(hips, _hips.S[1])
        ? calculatedValueHips({ ukSize: "UK10", skcaSize: "S" })
        : isBetween(hips, _hips.M[0])
        ? calculatedValueHips({ ukSize: "UK12", skcaSize: "M" })
        : isBetween(hips, _hips.M[1])
        ? calculatedValueHips({ ukSize: "UK14", skcaSize: "M" })
        : isBetween(hips, _hips.L[0])
        ? calculatedValueHips({ ukSize: "UK16", skcaSize: "L" })
        : isBetween(hips, _hips.L[1])
        ? calculatedValueHips({ ukSize: "UK18", skcaSize: "L" })
        : isBetween(hips, _hips.XL[0])
        ? calculatedValueHips({ ukSize: "UK20", skcaSize: "XL" })
        : isBetween(hips, _hips.XL[1])
        ? calculatedValueHips({ ukSize: "UK22", skcaSize: "XL" })
        : calculatedValueHips({ ukSize: "MTO", skcaSize: "MTO" });
    }
    if (bust && hips && waist) {
      isBetween(waist, _waist.XS[0]) &&
      (isBetween(hips, _hips.XS[0]) || isBetween(hips, _hips.XS[1])) &&
      (isBetween(bust, _bust.XS[0]) || isBetween(bust, _bust.XS[1]))
        ? calculatedValueWaist({ ukSize: "UK4", skcaSize: "XS" })
        : isBetween(waist, _waist.XS[1]) &&
          (isBetween(hips, _hips.XS[0]) || isBetween(hips, _hips.XS[1])) &&
          (isBetween(bust, _bust.XS[0]) || isBetween(bust, _bust.XS[1]))
        ? calculatedValueWaist({ ukSize: "UK6", skcaSize: "XS" })
        : isBetween(waist, _waist.S[0]) &&
          (isBetween(hips, _hips.S[0]) || isBetween(hips, _hips.S[1])) &&
          (isBetween(bust, _bust.S[0]) || isBetween(bust, _bust.S[1]))
        ? calculatedValueWaist({ ukSize: "UK8", skcaSize: "S" })
        : isBetween(waist, _waist.S[1]) &&
          (isBetween(hips, _hips.S[0]) || isBetween(hips, _hips.S[1])) &&
          (isBetween(bust, _bust.S[0]) || isBetween(bust, _bust.S[1]))
        ? calculatedValueWaist({ ukSize: "UK10", skcaSize: "S" })
        : isBetween(waist, _waist.M[0]) &&
          (isBetween(hips, _hips.M[0]) || isBetween(hips, _hips.M[1])) &&
          (isBetween(bust, _bust.M[0]) || isBetween(bust, _bust.M[1]))
        ? calculatedValueWaist({ ukSize: "UK12", skcaSize: "M" })
        : isBetween(waist, _waist.M[1]) &&
          (isBetween(hips, _hips.M[0]) || isBetween(hips, _hips.M[1])) &&
          (isBetween(bust, _bust.M[0]) || isBetween(bust, _bust.M[1]))
        ? calculatedValueWaist({ ukSize: "UK14", skcaSize: "M" })
        : isBetween(waist, _waist.L[0]) &&
          (isBetween(hips, _hips.L[0]) || isBetween(hips, _hips.L[1])) &&
          (isBetween(bust, _bust.L[0]) || isBetween(bust, _bust.L[1]))
        ? calculatedValueWaist({ ukSize: "UK16", skcaSize: "L" })
        : isBetween(waist, _waist.L[1]) &&
          (isBetween(hips, _hips.L[0]) || isBetween(hips, _hips.L[1])) &&
          (isBetween(bust, _bust.L[0]) || isBetween(bust, _bust.L[1]))
        ? calculatedValueWaist({ ukSize: "UK18", skcaSize: "L" })
        : isBetween(waist, _waist.XL[0]) &&
          (isBetween(hips, _hips.XL[0]) || isBetween(hips, _hips.XL[1])) &&
          (isBetween(bust, _bust.XL[0]) || isBetween(bust, _bust.XL[1]))
        ? calculatedValueWaist({ ukSize: "UK20", skcaSize: "XL" })
        : isBetween(waist, _waist.XL[1]) &&
          (isBetween(hips, _hips.XL[0]) || isBetween(hips, _hips.XL[1])) &&
          (isBetween(bust, _bust.XL[0]) || isBetween(bust, _bust.XL[1]))
        ? calculatedValueWaist({ ukSize: "UK22", skcaSize: "XL" })
        : calculatedValueWaist({ ukSize: "MTO", skcaSize: "MTO" });
    }

    if (bust || waist || hips) {
      setShow();
      resizeSvg(valueWaist.skcaSize);
    }
  };
  const [vp, setVp] = useState(
    "M10.7,755.1c17,5.9,57.4,19.2,57.4,19.2s2-8.4,4.9-9.2c2.9-0.9,15,5.2,18.4,7.5c3.5,2.3,2.3,8.6,2.3,8.6    s44.4,9.8,68,7.5s41.8,6,72.6,6.3s93.5-22.5,97.8-21.6c4.3,0.9,4.6,11.5,4.6,11.5s18.4,0.1,37.6-3.5c16.3-3,64.9-17.5,71.7-19    c0,0-30.3-132.3-56.3-219.2s-92-230-94.6-238.9s-2.7-21.3-2.7-21.3s7.5-94,8.6-100.9c0.1-0.4,0.2-0.8,0.3-1.2    c-8-14.2-15.5-31.3-33.2-30.2s-45.3,4-55.8,4s-49.9-0.4-62.6,2.2c-12.7,2.5-23.1,21.4-23.5,26.1c-0.5,4.7,4.1,11.3,5.6,14.7    c4.9,11.2,14.7,82.1,15.3,91.9s-5.6,29.1-5.6,29.1s-30.8,80.1-56.9,143.1S10.7,755.1,10.7,755.1z"
  );
  const [show, setShow] = useState(false);
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <Container>
        <div className="text-center">
          <h5>Guaranteed perfect fit. Have a look at our </h5>
          <h1>Size Guide</h1>
          <Row>
            <div className="col container sizeGuide">
              <SizerSvg varPath={vp}></SizerSvg>
            </div>
            <div className="col col-lg-4">
              <Alert show={show} variant="secondary">
                <Alert.Heading>Our Experts have spoken..</Alert.Heading>

                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Upper Coordinate</th>
                      <th>Lower Coordinate</th>
                      <th>Dress</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {<td>{valueBust && valueBust.skcaSize}</td>}
                      {<td>{valueHips && valueHips.skcaSize}</td>}
                      {<td>{valueBust && valueBust.skcaSize}</td>}
                    </tr>
                  </tbody>
                </Table>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => setShow(false)}
                    variant="outline-danger"
                  >
                    Close
                  </Button>
                </div>
              </Alert>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Enter Measurements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>Bust</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Bust"
                          aria-label="bust"
                          aria-describedby="bust"
                          type="number"
                          id="bust"
                        />
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>Hips</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Hips"
                          aria-label="hips"
                          aria-describedby="hips"
                          type="number"
                          id="hips"
                        />
                      </InputGroup>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text>Waist</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Waist"
                          aria-label="waist"
                          aria-describedby="waist"
                          type="number"
                          id="waist"
                        />
                      </InputGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button onClick={compute} variant="primary" className="sizeGuide">
                Compute
              </Button>{" "}
              <Button onClick={clearVals} variant="danger">
                Clear
              </Button>{" "}
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

SizeGuideTable.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SizeGuideTable;
