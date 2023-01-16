
const Navbar = (props) => {

        return(
            <div style={styles.nav}>
                  <h1>
                    Dhruv's Shopping Cart
                </h1>
               
               <div style={styles.cartIconContainer}>
                    <img 
                        style={styles.cartIcon}
                        src = "https://cdn-icons-png.flaticon.com/512/4290/4290854.png" 
                        alt= "cart - icon" 
                    />
                    <span style={styles.cartCount}>{props.count}</span>
               </div>
            </div>
        );
    
}

const styles = {
    cartIcon: {
      height: 50,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

export default Navbar;