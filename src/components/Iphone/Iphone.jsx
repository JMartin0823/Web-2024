import './Iphone.css'
import React from "react"
import { useState } from 'react'

export function Iphone({
  }) {
    return(
        <>
        <div class="all1">
        <div class="iphonepro">
        <h2 class="iphh2">iPhone 15 Pro</h2>
        <h3 class="iphh3">Titanium. So strong. So light. So Pro.</h3>
        <div class="link">
        <a class ="learnmore">Learn more &gt;</a>
        <a class ="buy">Buy &gt;</a>
        </div>
        </div>
        <img class="iphone" src="https://www.apple.com/v/home/bk/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_largetall.jpg" alt="" />
        </div>
        </>
    )
}
