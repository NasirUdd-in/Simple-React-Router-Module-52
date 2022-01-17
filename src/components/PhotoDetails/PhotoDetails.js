import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PhotoDetails = () => {
    const { photoId } = useParams();
    const [singlephoto, setSinglephoto] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
            .then(res => res.json())
            .then(data => setSinglephoto(data));
    }, []);
    return (
        <div>
          <h1>{singlephoto.albumId}</h1>
          <img src={singlephoto.thumbnailUrl} alt="" />
        </div>
    );
};

export default PhotoDetails;