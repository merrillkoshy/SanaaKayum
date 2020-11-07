import React, { useState, useEffect } from "react"
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import client from "../../constants/config"


const SizeChartModal=props=>{
    const[sizeChart,setSizeChart]=useState("")
    useEffect(()=>{
        client.getEntries({
            content_type: "sizeChart"
          }).then(entries=>{
              entries.items.forEach(ent=>{
                
                  ent.fields.article==props.article?setSizeChart(ent.fields.sizes):null
              })
          })
          
          
    },[props.article])
        
    
    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
<Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Size Chart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
          <Container>
          {sizeChart?sizeChart.map((data, key)=>{
              return(
            <Row key={key}><Col style={{border:"1px solid black"}}>{data.size}</Col><Col style={{border:"1px solid black"}}>{data.measurements}</Col></Row>
              )
          }):""}
          </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
        </Modal>
    )
}

export default SizeChartModal