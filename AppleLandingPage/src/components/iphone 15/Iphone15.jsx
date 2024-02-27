import './Iphone15.css'
import React from "react"
import { useState } from 'react'

export function Iphone15({
  }) {
    return(
        <>
        <div className="all2">
        <div className="iphoneall">
        <h2 className="iph15h2">iPhone 15</h2>
        <h3 className="iph15h3">New camera. New design. Newphoria.</h3>
        <div className="link">
        <a className ="learnmore">Learn more &gt;</a>
        <a className ="buy">Buy &gt;</a>
        </div>
        </div>
        <img className="iphone15" src="https://www.apple.com/v/home/bk/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg" alt="" />
        </div>
        </>
    )
}
