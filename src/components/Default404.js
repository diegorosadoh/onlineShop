import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

class Default404 extends React.Component{
    render(){
        return (
            <div className="error">
                <h1><span>ERROR 404</span> - Page Not Found</h1>
                <Link to="/" className="a">Go back to homepage</Link>
            </div>
        );
    }
}

export {Default404};