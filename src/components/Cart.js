import React from "react";
import '../App.css';

class Cart extends React.Component{
    render(){
        const CART = this.props.cart.map((item)=>
            <li className="_grid shopping-cart--list-item" key={item.id}>
                <div className="_column product-image">
                    <img className="product-image--img" src = {item.image} alt="Item" />
                </div>

                <div className="_column product-info">
                    <h4 className="product-name">{item.name}</h4>
                    <p className="product-desc">{item.brand}</p>
                    <div className="price product-single-price">${item.price}</div>
                </div>

                <div className="_column product-modifiers">
                    <div className="_grid">
                        <button className="_btn _column product-subtract" onClick={()=>this.minus(item.id)}>&minus;</button>
                        <div className="_column product-qty">{item.qty} u.</div>
                        <button className="_btn _column product-plus" onClick={()=>this.plus(item.id)}>&#x2b;</button>
                    </div>
                    <button className="_btn entypo-trash product-remove" onClick={()=>this.remove(item.id)}>Remove</button>
                    <div className="price product-total-price">Subtotal: ${item.qty*item.price}</div>
                </div>
            </li>
        );

        let subtotal=0;
        for(let item of this.props.cart)
            for(let uds=0;uds<item.qty;uds++)
                subtotal+=item.price;

        let ship= 'on checkout';
        if(subtotal>=100) ship='$0.00';

        let iva = (subtotal*0.21).toFixed(2);

        let total = (parseInt(iva)+subtotal).toFixed(2);
        
        return (
            <div className="main">
                <h1>Shopping cart</h1>
                <h2 className="sub-heading">Free shipping from $100!</h2>

                <section className="shopping-cart">
                    <ol className="ui-list shopping-cart--list" id="shopping-cart--list">
                        {CART}
                    </ol>

                    <footer className="_grid cart-totals">
                        <div className="_column subtotal" id="subtotalCtr">
                            <div className="cart-totals-key">Subtotal</div>
                            <div className="cart-totals-value">${subtotal}</div>
                        </div>
                        <div className="_column shipping" id="shippingCtr">
                            <div className="cart-totals-key">Shipping</div>
                            <div className="cart-totals-value">{ship}</div>
                        </div>
                        <div className="_column taxes" id="taxesCtr">
                            <div className="cart-totals-key">IVA</div>
                            <div className="cart-totals-value">${iva}</div>
                        </div>
                        <div className="_column total" id="totalCtr">
                            <div className="cart-totals-key">Total</div>
                            <div className="cart-totals-value">${total}</div>
                        </div>
                        <div className="_column checkout">
                            <button className="_btn checkout-btn entypo-forward">Checkout</button>
                        </div>
                    </footer>

                </section>
            </div>
        );
    }

    plus(id){
        this.props.plus(id);
    }

    minus(id){
        this.props.minus(id);
    }

    remove(id){
        this.props.remove(id);
    }
}

export {Cart};