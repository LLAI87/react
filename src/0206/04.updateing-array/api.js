export const pureUnshift = (arr, item) => {
  return [item, ...arr]
}

export const purePush = (arr, item) => {
  return [...arr, item]
}

export const searchFilter = (arr, keyword) => {
  return arr.filter((v, i) => {
    return v.text.includes(keyword)
  })
}

//reducer累加/歸納函式
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_HEAD':
      return pureUnshift(state, action.payload.item)
    case 'ADD_TO_TAIL':
      return purePush(state, action.payload.item)
    case 'SEARCH_KEYWORD':
      return searchFilter(state, action.payload.keyword)
    default:
      return state
  }
}
