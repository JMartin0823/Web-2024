import './Grid1.css'
import React from "react"
import { useState } from 'react'

export function Grid1({
    image = "",
    h5 = "",
    image2 = ""
  }) {
    return(
        <>
        <div className='all4'>
          <div className='gridtext'>
        <img className="logo" src={image} alt="" />
        <h5 className='gridh5'>{h5}</h5>
        <p class ="learnmore">Learn More</p>
        <p class ="buy">Buy</p>
        </div>
        <img className="accessories" src={image2} alt="" />
        </div>
        </>
    )
}
