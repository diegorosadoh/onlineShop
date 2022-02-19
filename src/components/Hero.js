import React from "react";
import '../App.css';

class Hero extends React.Component{
    render(){
        return (
            <div className="parallax-wrapper">
                <div className="hero parallax-content">
                    {this.props.addedToCart ? 
                        <p className="added">Product added! <span>&#10548;</span></p>
                        :
                        null
                    }
                    <img src="https://wallpapercave.com/wp/wp5204110.jpg" alt="hero section"/>
                    <div className="hero__title">
                        <h1>Online Shop</h1>
                        <p>Buy things and stuff</p>
                    </div>
                </div>
            </div>
        );
    }
}

export {Hero};