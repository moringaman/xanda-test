import initialData from '../Data/Products'

//Reducers
// Marks items selected or unselected from/to the cart
const productListReducer = (products=initialData, action) => {
if (action) {
  if (action.type === 'SELECT_ITEM' || action.type === 'REMOVE_ITEM') {
    let ObjIndex = products.findIndex(obj => obj.id === action.payload.id)
    products[ObjIndex].inCart = !products[ObjIndex].inCart
    return products
  }
}
  return products
} 
// Reducer to return shopping cart state
const shoppingCartReducer = (selectedItems=[], action) => {
  if (action.type === 'SELECT_ITEM') {
    return [...selectedItems, action.payload]
  }
  if (action.type === 'REMOVE_ITEM') {
    return [...selectedItems.filter((item) => item.id !== action.payload.id)]
  }
   if (action.type === '@@router/LOCATION_CHANGE') {
     return selectedItems
   }
  return []
}
// Reducer to increment and decrement total cart value
const totalPriceReducer = (totalPrice=0, action) => {
  if (action.type === 'SELECT_ITEM') {
    return totalPrice += action.payload.Price
  }
  if (action.type === 'REMOVE_ITEM') {
    return totalPrice -= action.payload.Price
  }
  return totalPrice
}

export default {
  items: productListReducer,
  selectedItems: shoppingCartReducer,
  total: totalPriceReducer
}