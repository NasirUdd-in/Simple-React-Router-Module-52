import React from 'react';
import { Link } from 'react-router-dom';


const SingleUser = (props) => {
    const { id, name,username,email  } = props.singleData;
    return (
        <div style={{border: "2px solid red" }}>
            <h1>{name}</h1>
            <h5>{username}</h5>
            <h5>{email}</h5>
           <Link to={`/userDetails/${id}`}>View Details</Link>
        </div>
    );
};

export default SingleUser;