import React from 'react'
import { Paper, ListItemText, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { addCart } from '../redux/actions'
import { useHistory } from 'react-router-dom'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addCart: (c) => dispatch(addCart(c))
  }
}

const Cart = ( state ) => {
  const cartList = state.cartList;
  const numItems = state.numItems;
  const history = useHistory();

  const handleClick = (e) => {
    history.push("/checkout")
  }

  return (
    <Paper square={false} elevation={3}>
      <h4>Course Cart <span role="img" aria-label="cart">🛒</span></h4>
      <p>Items: {numItems}</p>
      {numItems === 0 
        ? (<p>Your cart is currently empty! Click + to add a course to cart.</p>)
        : cartList.map((c) => 
          (<ListItemText 
            primary={c.dept + ' ' + c.number} 
            secondary={c.title}>
          </ListItemText>)
        )}
      <Button 
        edge="end" 
        variant="contained" 
        color="primary" 
        onClick={e => handleClick(e)} disabled={numItems === 0}>
        checkout
      </Button>
    </Paper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);