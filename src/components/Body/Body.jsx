import React from "react";
import "./Body.css"
import { VisionPro } from "../VisionPro/VisionPro";
import { Iphone } from "../Iphone/Iphone";
import { Iphone15 } from "../iphone 15/Iphone15";
import { Macbook } from "../Macbook/Macbook";
// import { Shows } from "../Shows/Shows";
// import { dataShows } from "../../data/datashows";

export function Body() {
  return (
    <>
   <body>
    <div className="iphone">
    <Macbook></Macbook>
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

