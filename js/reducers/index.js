// import { combineReducers } from 'redux'
//reducers
const initialData = [{id: '001', Name: 'Star Wars: Battlefront', description: 'Immerse Yourself in the Ultimate Star Wars Experience',image: 'https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/game1.jpg?alt=media&token=0955f474-159a-4fc3-8363-62a30b9ed23b', inCart: false, Price: 300},
  {id: '002', Name: 'Dying Light',description: 'Dying Light is an open world first person survival horror action-adventure video game developed by Techland', image: 'https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/game2.jpg?alt=media&token=870bc697-debd-4f89-bddd-01463ea4e582', inCart: false, Price: 500},
  {id: '003', Name: 'Bloodborne', description: 'Bloodborne is an action-playing video game developed by FromSoftware', image: 'https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/game3.jpg?alt=media&token=d4591cc0-35e0-4936-a37f-e662368d105a',inCart: false, Price: 9999},
  {id: '004', Name: 'Evolve', description: 'Evolve is a first-person shooter video game developed by Turtle Rock Studios', image: 'https://firebasestorage.googleapis.com/v0/b/cadence-8edfc.appspot.com/o/game4.jpg?alt=media&token=ac065244-df1c-487c-9ddb-cc7c44300704',inCart: false, Price: 150}]

const productListReducer = (products=initialData, action) => {
if (action) {
  console.log('triggered', action)
  if (action.type === 'SELECT_ITEM' || action.type === 'REMOVE_ITEM') {
    console.log("Hi ")
    let ObjIndex = products.findIndex(obj => obj.id === action.payload.id)
    products[ObjIndex].inCart = !products[ObjIndex].inCart
    return products
  }
}
  return products
} 

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