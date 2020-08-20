import React from 'react'
import ReactPlayer from 'react-player'
import { CSSTransition } from 'react-transition-group'


const Music = ({ closeModule, in: inProp }) => {

    return (
            <CSSTransition
                unmountOnExit
                in={inProp}
                timeout={500}
                classNames="music"
                appear
            >
                <div className="Music centerChild">
                    <h1 
                        onClick={() => closeModule('music')}
                        className="close">X
                    </h1>
                    <div className="musicContainer centerChild">
                        <ReactPlayer
                            className="videoPlayer"
                            url="https://youtu.be/VEJ6LtjoLus"
                            width="100%"
                            height="100%"
                            playing
                            controls
                        />  
                    </div>
                </div>
        </CSSTransition>
    )
}




export default Music