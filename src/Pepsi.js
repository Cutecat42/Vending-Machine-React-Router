import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Pepsi = () => {
    return (
        <div>
        <p>Hi! I am some Pepsi.</p>
        <p>Go <Link to="/">Home</Link> </p>
    </div>
    )
}

export default Pepsi;