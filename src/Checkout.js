import React, {Component} from 'react'

class Checkout extends Component{
    constructor(props){
        super(props);

        this.state={
            orderTotal:props.orderTotal
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            orderTotal:newProps.orderTotal
        })
    }
    render(){
        return(
            <React.Fragment>
                <h1>Checkout</h1>
                <p>Total:{this.state.orderTotal}</p>
            </React.Fragment>
        )
    }
}

export default Checkout;