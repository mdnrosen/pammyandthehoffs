import React from 'react'
import { CSSTransition} from 'react-transition-group'



const Bottomrow = ({ in: inProp, openModule }) => (
    <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={500}
        classNames="botttomrow"
        appear>
        <div className="Bottomrow row">
            <div className="wide vwbox2"></div>
            <div className="wide vwbox5"></div>
            <div className="thin toAbout containsLink centerChild"
                onClick={() => openModule('about')}
            >
                <h1 className="isLink">
                    About
                </h1>
            </div>
        </div>

    </CSSTransition>
)




export default Bottomrow