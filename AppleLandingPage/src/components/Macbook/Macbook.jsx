import './Macbook.css'
import React from "react"
import { useState } from 'react'

export function Macbook({
  }) {
    return(
        <>
        <div className="allmac">
        <div className="macall">
        <h2 className="mach2">MacBook Pro</h2>
        <h3 className="mach3">Mind-blowing. Head-turning.</h3>
        <div className="link">
        <a className ="learnmore">Learn more &gt;</a>
        <a className ="buy">Buy &gt;</a>
        </div>
        </div>
        <img className="macbook" src="https://www.apple.com/v/home/bk/images/heroes/macbook-pro-14-and-16/hero_mbp__fx6ku12vgw2m_largetall.jpg" alt="" />
        </div>
        </>
    )
}
