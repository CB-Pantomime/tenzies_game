
import React from 'react'

// our Die component receiving props
function Die(props) {

    // variable called styles referencing an object
    // this object is a styles ternary 
    // this will toggle die-face color from white to green if clicked to be held
    const styles = {
       // backgroundColor is determined by isHeld is true or false
       backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div 
        className='die-face' 
        // style referencing our styles variable above
        style={styles}
        // onClick referencing our handleClick passed through props
        onClick={props.handleClick}
        >
            {/* passing value from dice state through props */}
            <h2 className='die-num'>{props.value}</h2>    
        </div>
    )
}

export default Die;
