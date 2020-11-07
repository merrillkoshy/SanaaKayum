import React, { useState } from "react"
import client from "../constants/config";
import clientMgr from "../constants/contentManager";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from "react-bootstrap";
import uuid from "uuid/v4";
const ChangeKeyValue=()=>{

    const [key,selectKey]=useState("")
    const [subCat,setSubCat]=useState("")
    const [totalEntries,setTotalEntries]=useState("")
const [toChange, selectToChange]=useState("")
const [changedValue, setChangedValue]=useState("")
    var resultArray=[]


  const updateAndPublish=(id,val)=>{
    clientMgr
    .then(environment => environment.getEntry(id))
    .then(entry => {
      entry.fields[key]["en-US"] = val;
      
      return entry.update();
    })
    .then(entry => ()=>{
      console.log(`${entry} succesfully updated`)
      return entry.publish()
    });
    
    
  }
const performChangeKey=val=>{
    console.log(toChange)
    console.log(val)
    clientMgr
    .then(environment => environment.getEntries({
        content_type: "products"
    }))

    .then(entries => {
        entries.items.forEach(ent=>{
            if(ent.fields[key]["en-US"]===toChange)
            {
              
              updateAndPublish(ent.sys.id,val)
          }
            
        })
        
   
      
    })
   
}    
const computeValue=val=>{
    
    client
    .getEntries({
      content_type: "products"
    })
    .then(entries => {
        
      entries.items.forEach(ent => {
          
        resultArray.push(ent.fields[val])
        
      });
      resultArray=[...new Set(resultArray)]
      client
    .getEntries({
      content_type: "lowerCoordinate"
    })
    .then(entries => {
        
      entries.items.forEach(ent => {
          
        resultArray.push(ent.fields[val])
        
      });
      resultArray=[...new Set(resultArray)]
      client
    .getEntries({
      content_type: "lingerie"
    })
    .then(entries => {
        
      entries.items.forEach(ent => {
          
        resultArray.push(ent.fields[val])
        
      });
      resultArray=[...new Set(resultArray)]
      console.log(resultArray)
      setTotalEntries(resultArray.length);

      setSubCat(
        
      <Form.Group controlId="exampleForm.ControlSelect2">
      <Form.Label>Select Value To Change</Form.Label>
      <Form.Control as="select" 
       onChange={e => {selectToChange(e.target.value)
      }}
      ><option key={uuid()}>--Select Value--</option>
          {resultArray.map(
                  result=>{return <option key={uuid()}>{result}</option>} 
              )}
        
      </Form.Control>
      
    </Form.Group>
    )
    });
    });
});
}
        
    return(
        <Container>
        <Form className="mt-100">
          
            <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Key To Change</Form.Label>
    <Form.Control as="select" onChange={e => {
        selectKey(e.target.value)
        computeValue(e.target.value)
    }
    }>
        <option>Select Key</option>
      <option>article</option>
      <option>tags</option>
      <option>collectionName</option>
    </Form.Control>
  </Form.Group>
  {subCat}
  
  {totalEntries?`${totalEntries} entries found`:""} 
 
  <Form.Group controlId="formChangedKey">
  <Form.Label>Enter New Value</Form.Label>
    <Form.Control type="text" placeholder="New Name" onChange={e => setChangedValue(e.target.value)
    } />
   
  </Form.Group>
  <Button variant="primary" type="submit" onClick={e=>{
      e.preventDefault();
      
      performChangeKey(changedValue)
  }}>
    Submit
  </Button>
</Form>
</Container>
    )
}

export default ChangeKeyValue