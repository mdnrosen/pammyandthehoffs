import React from 'react'
import { CSSTransition } from 'react-transition-group'


const RowFour = ({ in: inProp, openModule }) => (
            <CSSTransition
            unmountOnExit
            in={inProp}
            timeout={500}
            classNames="slidefromleft"
            appear>
            <div 
                onClick={() => openModule('contact')}
                className="RowFour centerChild">
                <h2 className="isLink">Contact</h2>
            </div>
        </CSSTransition>

    )




export default RowFour