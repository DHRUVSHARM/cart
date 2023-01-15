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
        
        
        /*this.setState(
            //in this form this setState causes the component to re-render 
            //on every call, if we have multiple calls, from first till last call
            //the object passed is shallow-merged and only one render takes place
            //this is called batching  
            
            //the state object will be shallow - merged with this object 
            {
                qty : this.state.qty + 1
            }
        )*/

        //using callback to work with setState
        //in this form since we are using prevState in callback, multiple
        //calls are batched but all changes are added
        //setState is asynchronus, so we have option to add a
        //second argument as callback thet will take place after the setState 
        //guaranteed 
        this.setState((prevState)=>{
            return {
                qty : prevState.qty + 1
            }
        })

        //console.log("this" , this.state)
    }

    decreaseQuantity = () =>{

        //function to decrease the quantity
        this.setState( (prevState)=>{
            if(prevState.qty > 0){
                return {
                    qty : prevState.qty - 1
                }
            }
            else{
                return {}
            }
        
        } )
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
                        
                        <img alt = "decrease"
                         className="action-icons" 
                         src="https://cdn-icons-png.flaticon.com/512/2569/2569198.png" 
                         onClick={this.decreaseQuantity}
                         />
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