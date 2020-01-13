import React from 'react'
import { connect } from 'react-redux'
import { removedItem } from '../actions'
import { browserHistory } from 'react-router'

class ShoppingCart extends React.Component {
  renderList() {
    return this.props.items.map(item => {
      return(
      <div className="cart-item" key={item.id}>
        <div className="cart-item_image" style={{backgroundImage: `url(${item.image})`}}></div>
        <div className="cart-item_name">{item.Name}</div>
        <img className="cart-item_coins" src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/coins.png?alt=media&token=c89b55ae-24fb-4814-aac5-18d739fe512e"/>
        <p className="cart-item_price">{ item.Price } Gil</p>
        <img
        className="bin" 
        onClick={() => this.props.removedItem(item)}
        src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/bin.png?alt=media&token=369907b5-7bca-4fc0-ac90-a0d7a74dca12"
       />
      </div>
      )
    })
  }

  renderCartMessage(props) {
    if (props.items.length < 1) {
      return(
        <p className="cart-pane-message">No items</p>
      )
    }
  }

  renderCartTotal(props) {
    if (props.total > 0) {
      return (
        <div className="total">
          <div className="total-title">Total</div>
          <div className="total-price">
            {this.props.total } <span>Gil</span>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Basket</h1>
        <div>{this.renderList()}</div>
        <div>{this.renderCartMessage(this.props)}</div>
        <div>{this.renderCartTotal(this.props)}</div>
          <div 
            onClick={() => { if(this.props.items.length > 0) browserHistory.push('/checkout')}} 
            style={{opacity: this.props.items.length < 1 ? '0.5' : '1'}}
            className="cart-button">
            Continue
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    total: state.total,
    items: state.selectedItems,
    cartTotal: parseInt(state.selectedItems.reduce((acc, item) => acc + item.Price, 0))
  }
}

export default connect(mapStateToProps, {removedItem})(ShoppingCart)