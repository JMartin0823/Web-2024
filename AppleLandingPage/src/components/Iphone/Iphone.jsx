import './Iphone.css'
import React from "react"
import { useState } from 'react'

export function Iphone({
  }) {
    return(
        <>
        <div className="all1">
        <div className="iphonepro">
        <h2 className="iphh2">iPhone 15 Pro</h2>
        <h3 className="iphh3">Titanium. So strong. So light. So Pro.</h3>
        <div className="link">
        <a className ="learnmore">Learn more &gt;</a>
        <a className ="buy">Buy &gt;</a>
        </div>
        </div>
        <img className="iphone" src="https://www.apple.com/v/home/bk/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_largetall.jpg" alt="" />
        </div>
        </>
    )
}
