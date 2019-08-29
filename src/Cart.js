import React, {Component} from 'react'
import Item from './Item'

class Cart extends Component{
    constructor(props){
        super(props);

        this.state={
            items:props.items
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            items:newProps.items
        })
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.props.removeFromCart(item)
    }

    render(){
        return(
            <React.Fragment>
                <h1>Cart</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item key={item.id} item={item} isCart={true} removeFromCart={this.removeFromCart}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Cart;