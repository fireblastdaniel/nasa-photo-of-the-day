import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AponImage from '../AponImage/AponImage';
import AponInfo from '../AponInfo/AponInfo';

import './MainCard.css'

const MainCard = props => {
    const [apon, setApon] = useState({});
    const apiKey = 'JGtqQfO5Qbfx3hwGnyo9h0G57tYEZElgFdwYuvWd'

    useEffect( () => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}${props.date}`)
            .then(response => {
                setApon(response.data);
            })
            .catch(error => {
                console.log('the data was not returned', error);
            })
    }, [props.date])
    return (
        <div className='main-card'>
            <AponImage imgUrl={apon.url} imgTitle={apon.title} />
            <AponInfo title={apon.title} copyright={apon.copyright} explanation={apon.explanation}/>
        </div>
    );
}

export default MainCard;