import React from 'react'
import { CSSTransition } from 'react-transition-group'


const RowThree = ({ in: inProp, openModule }) => (
            <CSSTransition
            unmountOnExit
            in={inProp}
            timeout={500}
            classNames="slidefromright"
            appear>
            <div 
                onClick={() => openModule('music')}
                className="RowThree centerChild">
                <h2 className="isLink">Music</h2>
            </div>
        </CSSTransition>

    )




export default RowThree