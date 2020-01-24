import React from 'react';
import { ImageGroup, Image } from 'react-fullscreen-image';
import './AponImage.css'

const AponImage = props => {
    const image = props.imgUrl;
    return (
        // <div className='main-photo'>
        //     <img src={`${image}`} alt={props.imgTitle}/>
        // </div>
        <ImageGroup>
            <div className="main-photo">
            <Image
              src={image}
              alt={props.imgTitle}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
        ))}
      </div>
    </ImageGroup>
    );
}

export default AponImage;