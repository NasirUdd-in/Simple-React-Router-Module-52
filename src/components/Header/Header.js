import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink
                activeStyle={activeStyle}
                to="/friends"
            >Friends</NavLink>
            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink activeStyle={activeStyle} to="/about/culture">Culture</NavLink>
            <NavLink activeStyle={activeStyle} to="/photos">Photos</NavLink>
            <NavLink activeStyle={activeStyle} to="/posts">Posts</NavLink>
            <NavLink activeStyle={activeStyle} to="/allUser">AllUser</NavLink>
        </nav>
    );
};

export default Header;