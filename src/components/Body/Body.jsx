import React from "react";
import "./Body.css"
import { VisionPro } from "../VisionPro/VisionPro";
import { Iphone } from "../iPhone/iPhone";
import { Iphone15 } from "../iphone 15/Iphone15";
// import { gridsection1 } from "../../data/datasquare1";
// import { Grid1 } from "../Grid1/Grid1";

export function Body() {
  return (
    <>
   <body>
    <div className="iphone">
    <Iphone></Iphone>
    <Iphone15></Iphone15>
    <VisionPro></VisionPro>
    {/* <div className="gridsection">
    {gridsection1.map((grid1,key)=>( 
            <Grid1 key={key} h4={grid1.h4} h5={grid1.h5} image2={grid1.image2}></Grid1>
        ))}
        </div> */}
  </div>
    </body>
    </>
  );
}   

