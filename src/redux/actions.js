import { SET_DESCRIP, ADD_CART, REMOVE_CART } from './actionTypes'

export const setDescrip = c => ({
  type: SET_DESCRIP,
  descrip: c,
})

export const addCart = c => ({
  type: ADD_CART,
  course: c,
})

export const removeCart = c => ({
  type: REMOVE_CART,
  course: c,
})