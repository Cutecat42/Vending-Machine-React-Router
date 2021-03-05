import Home from './Home';
import { Link } from "react-router-dom";
import './NavBar.css';

const TrailMix = () => {
    return (
        <div>
            <p>Hi! I am some trail mix.</p>
            <p>Go <Link to="/">Home</Link> </p>
        </div>
    )
}

export default TrailMix;