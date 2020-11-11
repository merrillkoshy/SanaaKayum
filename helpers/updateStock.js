import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import client from "../../constants/config";
import clientMgr from "../../constants/contentManager";


const updateStock=()=>{

    const [stock, setStock] = useState(0);
  const [entryID, setEntryID] = useState("unset");

  const createTable = (tSize, tData) => {
    var table = document.createElement("TABLE");
    document.querySelector("#resultTable").appendChild(table);
    var tableBody = document.createElement("TBODY");
    table.appendChild(tableBody);
    for (var i = 0; i < tSize; i++) {
      var tr = document.createElement("TR");
      tableBody.appendChild(tr);
      var td = document.createElement("TD");
      td.width = "75";
      td.appendChild(document.createTextNode(tData[i].name + "   :   "));
      tr.appendChild(td);
      td.appendChild(document.createTextNode(tData[i].stock));
      tr.appendChild(td);
    }
  };
  const getStock = query => {
    client
      .getEntries({
        content_type: "products"
      })
      .then(entries => {
        entries.items.forEach(ent => {
          if (ent.fields.serialNumber == query) {
            setEntryID(ent.sys.id);
            ;
            createTable(ent.fields.size.length, ent.fields.size);
            setStock(ent.fields.stock);
          }
        });
      });
  };
  const newStock = query => {
    clientMgr
      .getSpace("calc8uiajr6g")
      .then(space => space.getEntry(entryID))
      .then(entry => {
        entry.fields.stock["en-US"] = query;
        return entry.update();
      })
      .then(entry => entry.publish())
      .then(entry =>
        console.log(
          `Entry ${entryID} updated as .` + entry.fields.stock["en-US"]
        )
      )
      .catch(console.error);
  };
  
  return (
    <Container>
      <Form className="mt-100">
        <Form.Control
          type="text"
          id="serialNumber"
          placeholder="Enter Serial Number"
        />
        <Button
          onClick={() => {
            getStock(document.querySelector("#serialNumber").value);
          }}
          variant="primary"
        >
          Submit
        </Button>
        <div id="resultTable"></div>
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Stock
          </Form.Label>
          <Form.Label column sm="2">
            {stock}
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Update Stock</Form.Label>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Size Name" />
              </Col>
              <Col>
                <Form.Control placeholder="Stock" />
              </Col>
            </Row>
          </Form>
          <Form.Control
            id="newStock"
            type="number"
            placeholder="Enter new value"
          />
          <Form.Text className="text-muted">
            0 will render as Out of Stock
          </Form.Text>
        </Form.Group>
        <Button
          onClick={() => {
            newStock(parseInt(document.querySelector("#newStock").value));
          }}
          variant="primary"
        >
          Submit
        </Button>
        
      </Form>
    </Container>
  );
}

export default updateStock;