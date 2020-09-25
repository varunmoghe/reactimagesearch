import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        // return <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>
        return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{images}</div>;
}

export default ImageList;