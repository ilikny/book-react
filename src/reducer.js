export default function reducer(state, action) {

  switch (action.type) {

    case 'language/set':
      return {
        ...state,
        language: action.payload
      }
      
      case 'currency/set':
        // console.log(action)
        return {
          ...state,
          currency: action.payload
        }

      case 'cart/add':
        return {
          ...state,
          shoppingCart: [...state.shoppingCart, action.payload]
        }
    }

  //   return action;

}