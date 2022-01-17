import React, { useState, useEffect } from 'react';
import Photo from '../Photo/Photo';
const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")
            .then(res => res.json())
            .then(data => setPhotos(data));
    }, []);
    return (
        <div>
            {
                photos.map(photo => <Photo photo={photo}></Photo>)
            }
        </div>
    );
};

export default Photos;