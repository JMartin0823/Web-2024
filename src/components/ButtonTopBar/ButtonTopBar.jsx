import './ButtonTopBar.css'
import React from "react"
import { useState } from 'react'

export function ButtonTopBar({
    title = "",
  }) {
    return(
        <>
        <button class="all">

       <p>{title}</p>


        </button>
        </>
    )
}
