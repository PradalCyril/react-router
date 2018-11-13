import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './active.css'

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/history">History</Link></li>
                </ul>
                
                <p> Bienvenue sur l'acceuil</p>
            </div>
        );
    }
}
export default Home;