import React from 'react';


export default function Button(props) {

    return (
        <div>
            <button 
            type={props.typeButton}
            className={props.classButton}
            onClick={props.onClickButton}
            >
            {props.childrenButton}
            </button>
            
        </div>
    )
}