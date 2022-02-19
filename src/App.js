import React from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';

import { db } from './firebase';
import { collection, onSnapshot } from "firebase/firestore";

import { Cart } from './components/Cart';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Product } from './components/Product';
import { Default404 } from './components/Default404';

class App extends React.Component{
  state = {
    products:[],
    cart:[],
    addedToCart: false
  }

  render(){
    return (
      <div className="App">
        <Hero
          addedToCart={this.state.addedToCart}
        />

        <Routes>
          <Route path="" element={
            <Product 
              products={this.state.products}
              addCart={(id)=>this.addCart(id)}
              detailProd={(id)=>this.detailProd(id)}
            />
          }/>

          <Route path="/cart" element={
            <Cart 
              cart={this.state.cart} 
              plus={(id)=>this.plusCart(id)} 
              minus={(id)=>this.minusCart(id)}
              remove={(id)=>this.removeCart(id)}
            />
          }/>

          <Route path="*" element={<Default404/>}/>
        </Routes>

        <Navbar></Navbar>
      </div>
    );
  }

  componentDidMount(){
    onSnapshot(collection(db, "productos"), (lista) => {
      lista.forEach((item) => {
        this.setState((state)=>({products:[...state.products,item.data()]}));
      });
    });

    if(localStorage.cart){
      this.setState({cart: JSON.parse(localStorage.getItem("cart"))});
    }
  }

  addCart(id){
    let item; 

    if(this.state.cart.some(item => item.id === id)){
      item = this.state.cart.find(product => product.id===id);
      item.qty++;
    }else{
      item = this.state.products.find(product => product.id===id);

      this.setState((state)=>({cart: [...state.cart,{
        'id': item.id,
        'name': item.name,
        'image': item.image,
        'brand': item.brand,
        'price': item.price,
        'qty': 1
      }]}));
    }

    this.setState({addedToCart: true});
    this.updateCart();
    setTimeout(()=>this.setState({addedToCart: false}),3000);
  }

  plusCart(id){
    let item = this.state.cart.find(product => product.id===id);
    item.qty++;
    this.setState((state)=>({cart: [...state.cart]}));
    this.updateCart();
  }

  minusCart(id){
    let item = this.state.cart.find(product => product.id===id);
    if(item.qty>1){
      item.qty--;
      this.setState((state)=>({cart: [...state.cart]}));
    }else{
      this.removeCart(id);
    }
    this.updateCart();
  }

  removeCart(id){
    this.setState((state)=>({cart: [...state.cart.filter((item)=>item.id!==id)]}));
    this.updateCart();
  }

  updateCart(){
    localStorage.setItem("cart",JSON.stringify(this.state.cart));
  }
  
}

export default App;