import React from 'react'

const Person = ({ person }) => {
    // const [flipped, toggleFlip] = React.useState(false)






    return(
            <div className="PolaroidContainer" style={{transform: `rotate(${person.tilt}deg)`}}>
                <div className={`polaroid`}>
                    <div className="polaroidFront" >
                        <div className="polaroidtop">
                            <img src={person.image} alt={person.name} />
                        </div>
                        <div className="polaroidbottom">
                            <h1>{person.name}</h1>
                        </div>
                    </div>
                    {/* <div className="polaroidBack">
                        <h1>{person.name}</h1>
                        <h3>{person.role}</h3>
                        <p>{person.bio || `Hello here is some sample text about this person`}</p>
                    </div> */}
                </div>
            </div>
      
    )
}


export default Person