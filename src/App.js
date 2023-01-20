import { FirebaseError } from "firebase/app";
import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import firestore from 'firebase/compat/firestore';

//import { fireEvent } from "@testing-library/react";


class App extends React.Component {

  constructor(){
    super();

    this.state = {

        loading : true,
        //used for displaying the loading message 
        products : []
        //stores the products in the cart
    }

    this.db = firebase.firestore()
}

componentDidMount(){

    //we attach a listener that will update the component state whenever 
    //we edit fields in the firebase db
        this.db
            .collection('products')
            .onSnapshot((snapshot) => {
                console.log("snap " , snapshot)
            
                /*snapshot.docs.map((doc) => {
                    console.log(doc.data());
                })*/
    
               const products = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    data['id'] = doc.id;
    
                    return data;
                });
    
                this.setState({
    
                    products : products,
                    loading : false
            })
            
        
})

}

handleIncreaseQuantity = (product) => {
    //console.log("pls increase the prod : " , product)
    //we will have to find the product that has to be modified 
    const {products} = this.state;
    const index = products.indexOf(product);
/*
    //change the qty of the product
    products[index].qty += 1;

    //update the state
    this.setState(
        {
            product : product
        }
    )
*/  
    //now we will increase qty in firebase db
    //we get the document reference using the unique id of the product
    const docRef = this.db.collection('products').doc(products[index].id);
    //we use the reference obtained for updates
    docRef
        .update({
            qty : products[index].qty + 1
        })
        .then(() => {
            console.log("Update succesfull !!!")
        }).catch((error) => {
            console.log("Update error : " , error)
        })
}

handleDecreaseQuantity = (product) => {
    const{products} = this.state
    const index = products.indexOf(product);

  /*  if(products[index].qty > 0){
        products[index].qty -= 1;
        this.setState(
            {
                product : product
            }
        )   
    }*/

    if(products[index].qty > 0){
        const docRef = this.db.collection('products').doc(products[index].id);
        //we use the reference obtained for updates
        docRef
            .update({
                qty : products[index].qty - 1
            })
            .then(() => {
                console.log("Update succesfull !!!")
            }).catch((error) => {
                console.log("Update error : " , error)
            })
    }
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    /*//getting an array of all objects that do not have the passed id
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
    )*/
    
    const docRef = this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(() => {
        console.log("Deletion succesfull !!!")
    }).catch((error) => {
        console.log("Deletion error : " , error)
    })
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

addProduct = () => {
    this.db
        .collection('products')
        .add({
            img : '',
            price : 1,
            qty : 1,
            title : 'Default Product'
        }).then((docRef) => {
            console.log("Reference of document added: " , docRef)
        }).catch((error) => {
            console.log("error is: " , error)
        })
}

orderByPrice = () => {
    console.log("ordering by price !!!!")
    this.db
    .collection('products')
    .orderBy('price')
    .onSnapshot((snapshot) => {
        console.log("snap " , snapshot)
    
        /*snapshot.docs.map((doc) => {
            console.log(doc.data());
        })*/

       const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;

            return data;
        });

        this.setState({

            products : products
    })
})

}

orderByQuantity = () => {
    console.log("ordering by qty !!!!!!")
    this.db
    .collection('products')
    .orderBy('qty')
    .onSnapshot((snapshot) => {
        console.log("snap " , snapshot)
    
        /*snapshot.docs.map((doc) => {
            console.log(doc.data());
        })*/

       const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;

            return data;
        });

        this.setState({

            products : products
    })
})
}

    render(){

      const{products , loading} = this.state;

      return (
        <div className="App">
          <Navbar
            count = {this.getCartCount()}
          />
          <div className="actions">
          
          <button 
          onClick={this.addProduct}>
                Add a default product
            </button>

            <button 
          onClick={this.orderByPrice}>
                Order by Item price
            </button>

            <button 
          onClick={this.orderByQuantity}>
                Order by Item quantity
            </button>

            </div>
          <Cart
            productArray = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
          />

          {loading && <h1>Loading Products.....</h1>}
        
          <div className="footer">TOTAL: {this.getCartTotal()} USD</div>

        </div>
    );
  }

}

export default App;
