import React from 'react'
import { connect } from 'react-redux'
import { selectedItem } from '../actions'
class ProductList extends React.Component {
  renderList () {
   return this.props.items.map(item => {
     return (
       <div className='item' key={item.id}>
         <div className="item-image__frame" style={{backgroundImage: `url(${item.image})`, opacity: item.inCart ? '0.5' : '1'}}></div>
         <div className="item-detail" style={{opacity: item.inCart ? '0.5' : '1'}}>
          <div className="item-detail_name">
            {item.Name}
            </div>
            <p className="item-detail_description">{item.description}</p>
            <img src="https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/coins.png?alt=media&token=c89b55ae-24fb-4814-aac5-18d739fe512e"
                className="item-detail_coins"
                style={{opacity: item.inCart ? '0.5' : '1'}}
            />
            <p className="item-detail_price">{ item.Price } Gil</p>
         </div>
         <button 
          style={{opacity: item.inCart ? '0.5' : '1'}}
          onClick={() => { if (!item.inCart) this.props.selectedItem(item)}}
          >
            Add to Basket
          </button>
      </div>
     )
   })
  }

  render() {
    return <div className="products">{this.renderList()}</div>
  }

}

  const mapStateToProps = (state) => {
    return {
      items: state.items,
      selectedItems: state.selectedItems
          }
  }

export default connect(mapStateToProps, {selectedItem})(ProductList)