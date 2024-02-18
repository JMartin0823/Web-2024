import './Iphone.css'
import React from "react"
import { useState } from 'react'

export function Iphone({
    h2 = "",
    h3 = "",
    image = ""
  }) {
    return(
        <>
        <h2>{h2}</h2>
        <h3>{h3}</h3>
        <p class ="learnmore">Learn More</p>
        <p class ="buy">Buy</p>
        <img src={image} alt="" />
        </>
    )
}
