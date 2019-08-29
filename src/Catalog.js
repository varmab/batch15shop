import React, {Component} from 'react'
import Item from './Item';

class Catalog extends Component{
    constructor(props){
        super(props);

        this.state={
            items:props.items
        }
    }

    addToCart=(item)=>{
        console.log(item)
        this.props.addToCart(item);
    }

    render(){
        return(
            <React.Fragment>
                <h1>Catalog</h1>
                {
                    this.state.items.map((item)=>{
                        return <Item key={item.id} item={item} addToCart={this.addToCart} isCart={false}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Catalog;