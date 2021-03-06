import React from 'react';
import './AponInfo.css'

const AponInfo = props => {
    return (
        <div className='main-info'>
            <h2>{props.title}</h2>
            <h3 style={ props.copyright === undefined ? {display:'none'} : {display:'block'}}>By {props.copyright}</h3><hr/>
            <p>{props.explanation}</p>
        </div>
    );
}

export default AponInfo;