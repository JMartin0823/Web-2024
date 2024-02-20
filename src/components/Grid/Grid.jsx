import './Grid.css'
import React from "react"
import { useState } from 'react'

export function SideBar({Open=true}) {
    return(
        <>
        <div class="sidebar-container">
            {Open==false &&(
                <>
                    {Buttons.map((button, noteIndex) => (
                        <ButtonSideBar key={noteIndex} title={button.title} image={button.image}></ButtonSideBar>
                    ))}
                </>
            )}

            {Open &&(
                <>
                    {Buttons.map((button, noteIndex) => (
                        <ButtonSideBar key={noteIndex} title={button.title} image={button.image}></ButtonSideBar>
                    ))}
                </>
            )}



        </div>
        </>
    )
}