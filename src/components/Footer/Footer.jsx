import React from "react";
import "./Footer.css"
import { Text } from "../Text/Text";
import { Column } from "../Column/Column";


export function Footer() {
  return (
    <>
    <footer>
      <Text></Text>
      <Column className="column"></Column>
      <p className="shop">More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
      <hr></hr>
      <p className="shop">Copyright © 2024 Apple Inc. All rights reserved.    Privacy Policy |  Terms of Use  |  Sales and Refunds  |  Legal |  Site Map</p>
    </footer>
    </>
  );
}   