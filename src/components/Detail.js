import React from "react";
import '../App.css';

class Detail extends React.Component{
    render(){
        return (
            <div className="popup" onClick={()=>this.hide(this.props.detail.id)}>
                <p className="a-size">
                    <span className="size">{this.props.detail.name}</span><br></br>
                    {this.props.detail.description}<br></br>
                    <span className="size">{this.props.detail.brand}</span><br></br>
                    {this.props.detail.composition}
                </p>
            </div>
        );
    }

    hide(id){
        this.props.hideDetail(id);
    }
}

export {Detail};