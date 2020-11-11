import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import clientMgr from "../../constants/contentManager";


const makeaPromotion=()=>{
    const makePromo = (discountPerc, offerEndsOn) => {
        clientMgr
          .getSpace("calc8uiajr6g")
          .then(space => space.getEntry(entryID))
          .then(entry => {
            entry.fields.discount["en-US"] = discountPerc;
            entry.fields.offerEnd["en-US"] = offerEndsOn;
            return entry.update();
          })
          .then(entry => entry.publish())
          .then(entry =>
            console.log(
              `Entry ${entryID} updated as .` +
                entry.fields.discount["en-US"] +
                " and " +
                entry.fields.offerEnd["en-US"]
            )
          )
          .catch(console.error);
      };
      const makeGlobalPromo = (discountPerc, offerEndsOn) => {
        clientMgr
          .getSpace("calc8uiajr6g")
          .then(space => space.getEntries({ content_type: "lowerCoordinate" }))
          .then(entries => {
            entries.items.forEach(entry => {
              ;
              ;
              //   entry.fields.discount["en-US"] = discountPerc;
              //   entry.fields.offerEnd["en-US"] = offerEndsOn;
              //   return entry.update();
            });
          })
    
          .catch(console.error);
      };
      return(
          <>
         <Form.Group>
          <Form.Label>Make a promotion</Form.Label>
          <Form>
            <Form.Control
              id="discountPrecentage"
              type="number"
              placeholder="Enter percentage number"
            />
            <Form.Text className="text-muted">
              Enter plain number. Rendered as percentage.
            </Form.Text>
          </Form>
          <Form.Control
            id="offerEndsOn"
            type="datetime-local"
            placeholder="Select date and time"
          />
          <Form.Text className="text-muted">
            0 will render as Out of Stock
          </Form.Text>
        </Form.Group>
        <Button
          onClick={() => {
            makePromo(
              parseInt(document.querySelector("#discountPrecentage").value),
              document.querySelector("#offerEndsOn").value + "+04:00"
            );
          }}
          variant="primary"
        >
          Submit
        </Button>
        <Form.Group>
          <Form.Label>Make a global promotion</Form.Label>
          <Form>
            <Form.Control
              id="discountPrecentage"
              type="number"
              placeholder="Enter percentage number"
            />
            <Form.Text className="text-muted">
              Enter plain number. Rendered as percentage.
            </Form.Text>
          </Form>
          <Form.Control
            id="offerEndsOn"
            type="datetime-local"
            placeholder="Select date and time"
          />
          <Form.Text className="text-muted">
            0 will render as Out of Stock
          </Form.Text>
        </Form.Group>
        <Button
          onClick={() => {
            makeGlobalPromo(
              parseInt(document.querySelector("#discountPrecentage").value),
              document.querySelector("#offerEndsOn").value + "+04:00"
            );
          }}
          variant="primary"
        >
          Submit
        </Button> 
        </>
      )
}

export default makeaPromotion