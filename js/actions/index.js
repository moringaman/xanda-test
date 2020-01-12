//actions

export const selectedItem = (item) => {
  return {
    type: 'SELECT_ITEM',
    payload: item
  }
}

export const removedItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
}
