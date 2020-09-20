import { SET_DESCRIP, ADD_CART, REMOVE_CART } from '../actionTypes'

const initState = {
  descrip: {title: ''},
  numItems: 0,
  cartList: []
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case SET_DESCRIP: {
      state.descrip = action.descrip;
      return Object.assign({}, state, action.descrip);
    }
    case ADD_CART: {
      return {
        ...state,
        numItems: state.numItems + 1,
        cartList: [...state.cartList, action.course]
      }
    }
    case REMOVE_CART: {
      return {
        ...state,
        numItems:state.numItems - 1,
        cartList: state.cartList.filter(item => item !== action.course)
      }
    }
    default:
      return state;
  }
}

export default rootReducer;