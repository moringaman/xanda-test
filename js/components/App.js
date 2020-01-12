import React from 'react'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'
// import '../styles/main.css'

const App = () => {
  return(
    <div className="app">
      <div className="container">
        {/* <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/Frame%201montage.png?alt=media&token=3a540fbe-2396-442d-9214-45c4bf913450"
          className="bg-image" /> */}
        <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/telephone.png?alt=media&token=5a8b0a0d-a92e-4ea5-bd92-b12176de8aff"
        className="telephone" />
        <p className="header-text tel-no">1337 1337 1337</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/flag.png?alt=media&token=66aecd7c-c60d-4e96-b77d-943c32f71d9f" className="flag" />
        <p className="header-text slogan">Try another Castle</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/logo.png?alt=media&token=8ce26dd5-b5c3-4e76-804a-9eeb44f7e978"
          className="logo" />
        <div className="product-pane">
          <ProductList />
        </div>
        <div className="cart-pane">
          <ShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default App