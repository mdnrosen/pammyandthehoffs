import React from 'react'
import { CSSTransition } from 'react-transition-group'




const Toprow = ({ in: inProp }) => (
    <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={500}
        classNames="toprow"
        appear>
        <div className="Toprow row">
            <div className="thin vwbox1"></div>
            <div className="wide vwbox3"></div>
            <div className="wide vwbox4"></div>
        </div>

    </CSSTransition>
)


export default Toprow

