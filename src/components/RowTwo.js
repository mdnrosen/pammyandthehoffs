import React from 'react'
import { CSSTransition } from 'react-transition-group'


const RowTwo = ({ in: inProp }) => (
            <CSSTransition
            unmountOnExit
            in={inProp}
            timeout={500}
            classNames="slidefromleft"
            appear>
                <div className="RowTwo centerChild">
                    <h1>PAMMY AND THE HOFFS</h1>
                </div>
        </CSSTransition>

    )




export default RowTwo