import React from 'react';
import Card from './Card.js'
export default class index extends React.Component {
  render(){
    return(<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ height: "50%", width: "50%" }}>
      <Card></Card>
    </div>
  </div>)
  }
  
}
