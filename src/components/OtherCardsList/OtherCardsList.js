import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import './OtherCardsList.css';

const OtherCardsList = props => {
    const buttonRight = () => {
        document.querySelector('.scrolling-wrapper').scrollLeft +=500;
    }
    const buttonLeft = () => {
        document.querySelector('.scrolling-wrapper').scrollLeft-=500;
    }
    return (
        <div className='bottom'>
        <h2 className='recHeader'>You might also enjoy:</h2><hr/>
        <div className='scroll-btns'>
            <div className='scroll-left' onClick={buttonLeft}>&larr;</div>
            <div className='scroll-right' onClick={buttonRight}>&rarr;</div>
        </div>
        <div className='scrolling-wrapper'>
            {props.listPhotos.map(d => (
                <div className='cards' key={d.data.url}>
                <Card>
                    <CardImg top width="100%" src={d.data.url} alt={d.data.title} id={d.data.date} onClick={props.handleClick} />
                    <CardBody>
                        <CardTitle>{d.data.title}</CardTitle>
                        <CardSubtitle>{d.data.copyright}</CardSubtitle>
                    </CardBody>
                </Card>
                </div>
            ))}
            
        </div>
        </div>
    );
}

export default OtherCardsList;