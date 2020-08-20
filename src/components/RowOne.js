import React from 'react'
import { CSSTransition } from 'react-transition-group'


const RowOne = ({ in: inProp, openModule }) => (
            <CSSTransition
            unmountOnExit
            in={inProp}
            timeout={500}
            classNames="slidefromright"
            appear>
            <div 
                onClick={() => openModule('about')}
                className="RowOne centerChild">
                <h2 className="isLink">About</h2>
            </div>
        </CSSTransition>

    )




export default RowOne