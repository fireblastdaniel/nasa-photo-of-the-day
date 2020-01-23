import React from 'react';

const Header = props => {

    return (
        <>
        <span>See APON for: </span>
        <input type='date' className='aponDate'></input>
        <button className='date-btn' onClick={props.selectNewDate}>Submit</button>
        </>
    );
}

export default Header;