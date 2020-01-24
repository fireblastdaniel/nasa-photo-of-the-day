import React from 'react';
import { Button } from 'reactstrap';
import './Header.css';

const Header = props => {

    return (
        <>
        <span>See APON for: </span>
        <input type='date' className='aponDate'></input>
        <Button color='primary' onClick={props.selectNewDate}>Submit</Button>{' '}
        </>
    );
}

export default Header;