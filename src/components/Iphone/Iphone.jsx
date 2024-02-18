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
        <div class="link">
        <a class ="learnmore">Learn more &gt;</a>
        <a class ="buy">Buy &gt;</a>
        </div>
        <img src={image} alt="" />
        </>
    )
}
