import React from "react";
import '../App.css';
import { Detail } from './Detail';

class Product extends React.Component{
    array=new Array(this.props.products.length);
    showDetail=this.array.fill(false);

    state={
        showDetail: this.showDetail
    }

    render(){
        const PRODUCTS = this.props.products.map((product)=>
            <div className="page-inner" key={product.id}>
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={product.image} alt=""/>
                            <div className="img-info">
                                {this.state.showDetail[product.id-1] ? 
                                    <Detail 
                                        detail={product}
                                        hideDetail={(id)=>this.hideDetail(id-1)}
                                    /> 
                                    :
                                    <div className="info-inner">
                                        <span className="p-name" onClick={()=>this.detail(product.id-1)}>{product.name}</span>
                                        <span className="p-company">{product.brand}</span>
                                    </div>
                                }
                                    <div className="a-size">Available sizes : <span className="size">{product.sizes.join(' · ')}</span></div>
                            </div>
                        </div>

                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner"></div>
                            </div>

                            <a className="cart" href="#" onClick={()=>this.addCart(product.id)}>
                                <span className="price">${product.price}</span>
                                <span className="add-to-cart">
                                    <span className="txt">Add in cart</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="container page-wrapper">
                {PRODUCTS}
            </div>
        );
    }

    addCart(id){
        this.props.addCart(id);
    }

    detail(id){
        this.state.showDetail[id]=true;
        this.setState((state)=>({showDetail: state.showDetail}));
    }

    hideDetail(id){
        this.state.showDetail[id]=false;
        this.setState((state)=>({showDetail: state.showDetail}));
    }
}

export {Product};