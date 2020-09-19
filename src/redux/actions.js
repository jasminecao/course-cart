import { SET_DESCRIP } from './actionTypes'

export const setDescrip = course => ({
  type: SET_DESCRIP,
  payload: {
    descrip: course
  }
})