import './Macbook.css'
import React from "react"
import { useState } from 'react'

export function Macbook({
  }) {
    return(
        <>
        <div class="allmac">
        <div class="macall">
        <h2 class="mach2">MacBook Pro</h2>
        <h3 class="mach3">Mind-blowing. Head-turning.</h3>
        <div class="link">
        <a class ="learnmore">Learn more &gt;</a>
        <a class ="buy">Buy &gt;</a>
        </div>
        </div>
        <img class="macbook" src="https://www.apple.com/v/home/bk/images/heroes/macbook-pro-14-and-16/hero_mbp__fx6ku12vgw2m_largetall.jpg" alt="" />
        </div>
        </>
    )
}
