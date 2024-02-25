import React from "react";
import "./Body.css"
import { VisionPro } from "../VisionPro/VisionPro";
import { Iphone } from "../Iphone/Iphone";
import { Iphone15 } from "../iphone 15/Iphone15";
import { Macbook } from "../Macbook/Macbook";
import {Grid} from "../Grid/Grid";
import { Carousel } from "../Shows/Shows";
import { Footer } from "../Footer/Footer";

export function Body() {
  return (
    <>
   <body>
    <div className="iphone">
    <Macbook></Macbook>
    <Iphone></Iphone>
    <Iphone15></Iphone15>
    <VisionPro></VisionPro>
    <Grid className="grid"></Grid>
    <Carousel className="carousel"></Carousel>
    <Footer></Footer>
  </div>
  
    </body>
    </>
  );
}   

