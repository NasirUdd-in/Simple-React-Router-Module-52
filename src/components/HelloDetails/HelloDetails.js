import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HelloDetails = () => {
    const { userId } = useParams();
    const [users, setUsers] = useState({});
    const { email, address } = users;

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div>
            <h1>{userId}</h1>
            <h5> by : {email} </h5>
            <h5> by : {address?.street} </h5>
            <h5> by : {address?.suite} </h5>
            <h5> by : {address?.zipcode} </h5>
        </div>
    );
};

export default HelloDetails;