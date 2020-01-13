import React from 'react'
import { connect } from 'react-redux'
import { removedItem } from '../actions'
import {  browserHistory } from 'react-router'

class Checkout extends React.Component {
  render() {
   console.log('Checkout Props ', this.props)
    return (
    <div className="checkout">
      <header />
        <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/telephone.png?alt=media&token=5a8b0a0d-a92e-4ea5-bd92-b12176de8aff"
        className="telephone" />
        <p className="header-text tel-no">1337 1337 1337</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/flag.png?alt=media&token=66aecd7c-c60d-4e96-b77d-943c32f71d9f" className="flag" />
        <p className="header-text slogan">Try another Castle</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/logo.png?alt=media&token=8ce26dd5-b5c3-4e76-804a-9eeb44f7e978"
          className="logo" />
      <div className="checkout-container">
        <button onClick={() => browserHistory.push('/')}>Go Back</button>
        <div className="checkout-items">
          { this.renderList()}
        </div>
        <div className="checkout-totals">
          <p><span>Total</span> {this.props.cartTotal} Gil</p>
        </div>
      </div>
    </div>
    )
  }

  renderList() {
    return this.props.items.map(item => {
      return (
        <div className="checkout-item" key={item.id}>
        <div className="checkout-item_image" style={{backgroundImage: `url(${item.image})`}}></div>
        <div className="checkout-item_name">{item.Name}</div>
        <img className="checkout-item_coins" src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/coins.png?alt=media&token=c89b55ae-24fb-4814-aac5-18d739fe512e"/>
        <p className="checkout-item_price">{ item.Price } Gil</p>
        <img
        className="checkout-item_bin" 
        onClick={() => this.props.removedItem(item)}
        src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/bin.png?alt=media&token=369907b5-7bca-4fc0-ac90-a0d7a74dca12"
       />
        </div>
      )
    })
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.selectedItems,
    cartTotal: parseInt(state.selectedItems.reduce((acc, item) => acc + item.Price, 1))
  }
}
export default connect(mapStateToProps, {removedItem})(Checkout)