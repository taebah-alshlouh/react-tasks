import React from 'react';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function RenderingArrayOfObjects(){
  const data=[
      {
          "id":"1",
          "Name":"Apple",
          "color":"Yellow",
          
      },
      {
        "id":"2",
         "Name":"Strawberry",
          "color":"Red",
      },
      {
         "id":"3",
          "Name":"Kiwi",
          "color":"Green"
      },
      {
        "id":"4",
         "Name":"Dates",
         "color":"brown"
      },
      {
        "id":"5",
         "Name":"Watermelon",
        "color":"Red"
      }
  ]
  const tableRows=data.map(
      (element)=>{
          return( 
              
            <tr>
              <td>{element.id}</td>
              <td>{element.Name}</td>
              <td>{element.color}</td>
            </tr>
              
          )
      }
  )
  return(
      <div>
        <h1>map function</h1>
        <Table hover>
            <thead>
              <tr>    
                <th> ID</th>
                <th>Name</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </Table>      
            
      </div>
  )
}
export default RenderingArrayOfObjects;