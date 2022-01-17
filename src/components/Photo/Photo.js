import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {

    const { id, title, thumbnailUrl } = props.photo;
    return (
        <div>
            <img src={thumbnailUrl} alt="" />
            <h3>{title}</h3>
            <Link to={ `/photoDetails/${id}` }>click me</Link>
        </div>
    );
};

export default Photo;