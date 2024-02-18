import React from "react";
import { TopBar } from "../TopBar/TopBar";
import { VisionPro } from "../VisionPro/VisionPro";
import { Iphone } from "../iPhone/iPhone";
import {IphoneSection} from "../../data/dataiPhone"
import { gridsection } from "../../data/datasquare";
import { Grid } from "../Grid/Grid";

export function Body() {
  return (
    <>
    <header>
      <TopBar></TopBar>
    </header>

    <body>

    {IphoneSection.map((iphone,key)=>( 
            <Iphone key={key} h2={iphone.h2} h3={iphone.h3} image={iphone.image}></Iphone>
        ))}

    <VisionPro></VisionPro>

    {gridsection.map((grid,key)=>( 
            <Grid key={key} image={grid.image} h5={grid.h5} image2={grid.image2}></Grid>
        ))}

    </body>
    </>
  );
}   

