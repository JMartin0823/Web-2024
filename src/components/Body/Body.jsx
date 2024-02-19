import React from "react";
import "./Body.css"
import { VisionPro } from "../VisionPro/VisionPro";
import { Iphone } from "../iPhone/iPhone";
import { Iphone15 } from "../iphone 15/Iphone15";
// import { Shows } from "../Shows/Shows";
// import { dataShows } from "../../data/datashows";

export function Body() {
  return (
    <>
   <body>
    <div className="iphone">
    <Iphone></Iphone>
    <Iphone15></Iphone15>
    <VisionPro></VisionPro>
  </div>
  {/* {dataShows.map((Shows,key)=>( 
            <Shows key={key} image={Shows.image}></Shows>
        ))} */}
    </body>
    </>
  );
}   

