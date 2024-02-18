import './Grid.css'
import React from "react"
import { useState } from 'react'

export function Grid({
    image = "",
    h5 = "",
    image2 = ""
  }) {
    return(
        <>
        <img src={image} alt="" />
        <h5>{h5}</h5>
        <p class ="learnmore">Learn More</p>
        <p class ="buy">Buy</p>
        <img src={image2} alt="" />
        </>
    )
}
