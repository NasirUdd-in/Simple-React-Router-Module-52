import React, { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import '../SingleUser/singleUser.css';
const AllUser = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

   
    return (
        <div className='singleProfile'>
           {
               users.map(singleData => <SingleUser singleData ={singleData}></SingleUser>)
           }
        </div>
    );
};

export default AllUser;