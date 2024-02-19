import React from "react";
import "./Body.css"
import { VisionPro } from "../VisionPro/VisionPro";
import { Iphone } from "../iPhone/iPhone";
import { Iphone15 } from "../iphone 15/Iphone15";
// import { gridsection } from "../../data/datasquare";
// import { Grid } from "../Grid/Grid";

export function Body() {
  return (
    <>
   <body>
    <div className="iphone">
    <Iphone></Iphone>
    <Iphone15></Iphone15>
    <VisionPro></VisionPro>
    </div>

    {/*{gridsection.map((grid,key)=>( 
            <Grid key={key} image={grid.image} h5={grid.h5} image2={grid.image2}></Grid>
        ))} */}

    </body>
    </>
  );
}   

