import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Home= () => {
    return (
        <div>
        <p>Hi! Please select an item.</p>
        <p>Choose <Link to="/hotcheetos">Hot Cheetos</Link> </p>
        <p>Choose <Link to="/pepsi">Pepsi</Link> </p>
        <p>Choose <Link to="/trailmix">Trail Mix</Link> </p>
    </div>
    )
}

export default Home;