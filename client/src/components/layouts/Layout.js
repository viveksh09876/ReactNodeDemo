import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Layout extends Component {
    render() {
    return (
        <div>
            <div>
                <h1>ABCNews.com - Breaking news </h1>
            </div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
            <div>
                { this.props.children }
            </div>
        </div>
        );
    }
}

export default Layout;