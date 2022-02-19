import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return (
            <div>
                <input type="checkbox" id="active"/>
                <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
                <div className="wrapper">
                    <ul>
                        <li><Link to="/" className="a">Products</Link></li>
                        <li><Link to="cart" className="a">Cart</Link></li>
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount(){
        /* eventos para que el menú de navegación se oculte al cambiar de página */
        let links = document.getElementsByClassName('a');
        for(let link of links) link.addEventListener('click',()=>document.getElementById('active').checked = false);
    }
}

export {Navbar};