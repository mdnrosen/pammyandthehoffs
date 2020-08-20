import React from 'react'
import { CSSTransition } from 'react-transition-group'



const Contact = ({ closeModule, in: inProp }) => {


    return(
        <CSSTransition
            unmountOnExit
            in={inProp}
            timeout={500}
            classNames="contact"
            appear
        >
            <div className="Contact centerChild">
                <div className="contactContainer">
                    <h1 
                        onClick={() => closeModule('contact')}
                        className="close">X
                    </h1>
                    <h1>Wanna get in touch<span className="specialCharacter_h1">?</span></h1>
                    <h1>Email us<span className="specialCharacter_h1">!</span></h1>
                    <h3>
                        <a 
                            className="email"
                            href="mailto: pammyandthehoffs@gmail.com">pammyandthehoffs@gmail.com</a>
                    </h3>
                </div>
            </div>
        </CSSTransition>

    )
}


export default Contact