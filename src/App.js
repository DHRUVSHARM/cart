import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor(){
    super();

    this.state = {

        products : [
            {
                price : 99,
                title : 'Watch',
                qty : 1,
                img : 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                id : 1
            },
            {
                price : 999,
                title : 'Mobile Phone',
                qty : 10,
                img : 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                id: 2
            },
            {
                price : 9999,
                title : 'Laptop',
                qty : 46,
                img : 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                id: 3
            },
            {
                price : 45,
                title : 'Apple',
                qty : 10,
                img : 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
                id: 4
            },
            {
                price : 34,
                title : 'Mango',
                qty : 10,
                img : 'https://media.istockphoto.com/id/157234956/photo/mango-two.jpg?s=1024x1024&w=is&k=20&c=yZydrE30c3c6ev-tMQPYQziu3k3BEuimCHBBVZhsJv8=',
                id: 5
            },
            {
                price : 33,
                title : 'Pear',
                qty : 10,
                img : 'https://images.unsplash.com/photo-1601876819102-99560f772713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                id: 6
            },
            {
                price : 9,
                title : 'Notebook',
                qty : 10,
                img : 'https://images.unsplash.com/photo-1581431886211-6b932f8367f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                id: 7
            },
            {
                price : 20,
                title : 'Pen',
                qty : 10,
                img : 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                id: 8
            },
            {
                price : 1000,
                title : 'Headphones',
                qty : 10,
                img : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                id: 9
            }

        ]

    }

}

handleIncreaseQuantity = (product) => {
    //console.log("pls increase the prod : " , product)
    //we will have to find the product that has to be modified 
    const {products} = this.state;
    const index = products.indexOf(product);

    //change the qty of the product
    products[index].qty += 1;

    //update the state
    this.setState(
        {
            product : product
        }
    )
    
}

handleDecreaseQuantity = (product) => {
    const{products} = this.state
    const index = products.indexOf(product);

    if(products[index].qty > 0){
        products[index].qty -= 1;
        this.setState(
            {
                product : product
            }
        )   
    }
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    //getting an array of all objects that do not have the passed id
    const items = products.filter(  
        (item) => {
            return item.id !== id
        } 
    );

    //update state
    this.setState(
        {
            products : items
        }
    )
}

getCartCount = () => {
  const{products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  
  const{products} = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal + (product.qty * product.price);
  })

  return cartTotal;
}

    render(){

      const{products} = this.state;

      return (
        <div className="App">
          <Navbar
            count = {this.getCartCount()}
          />
          
          <Cart
            productArray = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
          />

          <div className="footer">TOTAL: {this.getCartTotal()} USD</div>

        </div>
    );
  }

}

export default App;
