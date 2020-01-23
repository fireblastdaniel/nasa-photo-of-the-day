import React from 'react';
import './AponImage.css'

const AponImage = props => {
    return (
        <div className='main-photo'>
            <img src={`${props.imgUrl}`} alt={props.imgTitle}/>
        </div>
    );
}

export default AponImage;