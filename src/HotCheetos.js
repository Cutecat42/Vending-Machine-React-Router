import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const HotCheetos = () => {
    return (
        <div>
        <p>Hi! I am some Hot Cheetos.</p>
        <p>Go <Link to="/">Home</Link> </p>
    </div>
    )
}

export default HotCheetos;