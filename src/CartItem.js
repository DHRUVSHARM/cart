import React from "react";
//cartitem is the component that encloses an item 

//this is a class based component 
class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            img : ''
        }
    }

    //arrow function will cause increaseQuantity to bind to class
    increaseQuantity = () => {
        console.log("this" , this.state)
    }

    render(){

        const {price , title , qty} = this.state;
        //object destructuring

        return(
            <div className="cart-item">
                <div className="left-block">
                    {/*left block contains the image*/}
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    {/*this is the rightblock where we have info on the item*/ }
                    <div style={styles.cart_item_font}>
                        {title}
                    </div>
                    <div style={ {color:'gray'} }>
                        Qty: {qty}
                    </div>
                    <div style={{color : 'gray'}}>
                        {price} USD
                    </div>
                    <div className="cart-item-actions">
                        {/*Buttons*/ }
                        <img 
                            alt = "increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                            onClick={this.increaseQuantity}
                         />
                        
                        <img alt = "decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png" />
                        <img alt = "delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/9332/9332345.png" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height : 110 , 
        width : 110 , 
        borderRadius : 4,
        backgroundColor: "crimson"
    },
    cart_item_font : {
        fontSize : 25
    }
}

export default CartItem;