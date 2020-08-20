import React from 'react'
import { CSSTransition } from 'react-transition-group'


import bios from '../assets/bios'
import Person from './Person'



const About = ({in: inProp, closeModule }) => {
    return(
        <CSSTransition
            unmountOnExit
            in={inProp}
            timeout={700}
            classNames="about"
            appear>
            <div className="About centerChild">
                <h1 
                    style={{padding: '5px'}}
                    className="close"
                    onClick={() => closeModule('about')}
                >X</h1>
                <div className="polaroidsWrapper">
                    {bios.map((person, i) => 
                        <Person key={i} person={person} />
                    )}
                </div>


            </div>
        </CSSTransition>
    )
}



export default About