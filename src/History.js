import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './active.css'
class History extends Component {
    render() {
        return (
            <div>
              <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/history" className="active">History</Link></li>
                </ul>
              
              <p>Notre Histoire</p>
            </div>
        );
    }
}
export default History;