 
const CartItem = (props) => {

        //console.log('props' , this.props);

        const {price , title , qty} = props.product;
        const { product , 
                onIncreaseQuantity , 
                onDecreaseQuantity ,
                onDeleteProduct 
                }  = props;
        //object destructuring

        return(
            <div className="cart-item">
                <div className="left-block">
                    {/*left block contains the image*/}
                    <img style={styles.image} src={product.img}/>
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
                            onClick={
                                () => {
                                    onIncreaseQuantity(product)
                                }
                            }
                         />
                        
                        <img alt = "decrease"
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png" 
                            onClick={
                                () => {
                                    onDecreaseQuantity(product)
                                }
                            }
                         />

                        <img alt = "delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/9332/9332345.png" 
                               onClick={
                                () => {
                                    onDeleteProduct(product.id)
                                }
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }

const styles = {
    image : {
        height : 110 , 
        width : 110 , 
        borderRadius : 10,
        backgroundColor: "gray"
    },
    cart_item_font : {
        fontSize : 25
    }
}

export default CartItem;