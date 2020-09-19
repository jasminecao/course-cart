import { SET_DESCRIP } from '../actionTypes'

const initState = {
  descrip: {title: ''}
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case SET_DESCRIP: {
      const newDescrip = action.payload;
      return Object.assign({}, state, newDescrip)
    }
    default:
      return state;
  }
}

export default rootReducer;