import './TopBar.css'
import React from "react"
import { useState } from 'react'
import { ButtonTopBar } from '../ButtonTopBar/ButtonTopBar'
import { Buttons } from '../../data/datatopbar'

export function TopBar() {
    return(
        <>
        <button></button>
        {Buttons.map((but,key)=>( 
            <ButtonTopBar key={key} title={but.title}></ButtonTopBar>
        ))}
        <button></button>
        <button></button>
        </>
    )
}
