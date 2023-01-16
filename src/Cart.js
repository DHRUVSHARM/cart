import React from "react";
import CartItem from "./CartItem";
//cartitem is the component that encloses an item 

    const Cart = (props) => {

            //console.log("props is:  " , props);
            const{
                productArray,
                onDecreaseQuantity,
                onDeleteProduct,
                onIncreaseQuantity
            } = props;
            //console.log("product array is: " , productArray)

            return (
                
                <div className="cart">
                    {
                        productArray.map(
                            (product) => {
                                return ( 
                                <CartItem 
                                    product = {product} 
                                    key = {product.id}
                                    onIncreaseQuantity = {onIncreaseQuantity}
                                    onDecreaseQuantity = {onDecreaseQuantity}
                                    onDeleteProduct = {onDeleteProduct} 
                                /> )
                            }
                        )
                    }
                </div>
            )
        }

export default Cart;