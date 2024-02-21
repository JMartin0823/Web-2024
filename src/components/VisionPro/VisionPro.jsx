import './VisionPro.css'
import React from "react"
import { useState } from 'react'

export function VisionPro() {
    return(
        <>
        <div className='all3'>
        <img className="vision" src="https://www.apple.com/v/home/bk/images/heroes/apple-vision-pro/hero_apple_vision_pro_avail__ecthwv10twsy_largetall.jpg" alt="" />
        <div className="visiontext" >
        <img className="logo" src="https://www.apple.com/v/home/bk/images/logos/apple-vision-pro/hero_logo_apple_vision_pro__ea9qv4w4cngy_largetall.png" alt="" />
        <h3 className="visionh3" >Welcome to the era of spatial computing.</h3>
        <div className="link">
        <a className ="learnmore">Learn More &gt;</a>
        <a className ="buy">Buy &gt;</a>
        </div>
        </div>
        </div>
        </>
    )
}
