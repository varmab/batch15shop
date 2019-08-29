import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props);

        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    add=()=>{
        this.props.addToCart(this.state.item)
    }

    remove=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.item.product_short_description}</h1>
                
                {
                    (this.state.isCart==true) ?
                    ("") :
                    (<img src={this.state.item.imageUrl[0]}/>)
                }

                <p>Price:{this.state.item.min_list_price}</p>
                
                {
                    (this.state.isCart==true) ?
                    (<p>Qty:{this.state.item.qty}</p>) :
                    ("")
                }
                {
                    (this.state.isCart==true) ?
                    (<button onClick={this.remove}>Remove</button>) :
                    (<button onClick={this.add}>Add to cart</button>)
                }
            </React.Fragment>

        )
    }
}

export default Item;