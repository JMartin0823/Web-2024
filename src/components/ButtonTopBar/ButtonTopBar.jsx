import './ButtonTopBar.css'
import React from "react"
import { useState } from 'react'

export function ButtonTopBar({
    title = "",
  }) {
    return(
        <>
        <button>
       <p>{title}</p>
        </button>
        </>
    )
}
