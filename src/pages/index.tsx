import React from 'react';
import Card from './Card.js'
export default function IndexPage(): JSX.Element {
  return <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ height: "50%", width: "50%" }}>
      <Card></Card>
    </div>
  </div>;
}
