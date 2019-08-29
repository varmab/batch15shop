import React, {Component} from 'react'
import './Shop.css'
import Catalog from './Catalog';
import Cart from './Cart';
import Checkout from './Checkout';
import axios from 'axios'

class Shop extends Component{
    constructor(){
        super();

        this.state={
            items:[],
            cartItems:[],
            orderTotal:0
        }
    }

    componentDidMount(){
        axios.get('http://api.jsoneditoronline.org/v1/docs/572180836c614dadb4b2eccdc3a33cbc/data?jsonp')
        .then((results)=>{
            this.setState({
                items:results.data.response.products
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    addToCart=(item)=>{
        console.log(item)

        var isItemExists=this.state.cartItems.some((cartItem)=>{
            return cartItem.productid==item.productid;
        })

        if(!isItemExists){
            item.qty=1;
            this.setState({
                cartItems:[
                    ...this.state.cartItems,
                    item
                ]
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce(function(total,cartItem){
                        return total+cartItem.min_list_price*cartItem.qty;
                    },0)
                })
            })
        }
        else
        {
            var existingItem=this.state.cartItems.find((cartItem)=>{
                return cartItem.productid==item.productid;
            })

            existingItem.qty++;

            this.setState({
                cartItems:this.state.cartItems.filter((cartItem)=>{
                    return cartItem.productid!=existingItem.productid;
                }).concat(existingItem)
            },()=>{
                this.setState({
                    orderTotal:this.state.cartItems.reduce(function(total,cartItem){
                        return total+cartItem.min_list_price*cartItem.qty;
                    },0)
                })
            })
        }
        
    }

    removeFromCart=(item)=>{
        console.log(item)

        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem.productid!=item.productid;
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce(function(total,cartItem){
                    return total+cartItem.min_list_price*cartItem.qty;
                },0)
            })
        })
    }

    render(){
        return(
            <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={this.state.items} addToCart={this.addToCart}/>
                </div>
                <div className="column">
                    <Cart items={this.state.cartItems} removeFromCart={this.removeFromCart}/>
                    <Checkout orderTotal={this.state.orderTotal}/>
                </div>
            </div>
        )
    }
}

export default Shop;