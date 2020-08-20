import React from 'react'




import { CSSTransition } from 'react-transition-group'





const Midrow = ({ in: inProp, openModule  }) => {
    
    function handleCLick(page){
        openModule(page)
    }
    
 


return (
    <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={500}
        classNames="midrow"
        appear>
        <div className="Midrow row">
            <div
                onClick={() => handleCLick('music')} 
                className="thin toMusic containsLink centerChild">
                <h1 className="isLink">Music</h1>
            </div>
            <div className="wide title centerChild">
                <h1>PAMMY AND THE HOFFS</h1>
            </div>
            <div 
                onClick={() => handleCLick('contact')}
                className="thin toContact containsLink centerChild">
                <h1 className="isLink">Contact</h1>
            </div>
        </div>

    </CSSTransition>
)
}








export default Midrow