import React from "react";
//cartitem is the component that encloses an item 

//this is a class based component 
class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    {/*left block contains the image*/}
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    {/*this is the rightblock where we have info on the item*/ }
                    <div style={styles.cart_item_font}>
                        Phone
                    </div>
                    <div style={ {color:'gray'} }>
                        Qty: 1
                    </div>
                    <div style={{color : 'gray'}}>
                        999 USD
                    </div>
                    <div className="cart-item-actions">
                        {/*Buttons*/ }
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