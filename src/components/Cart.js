import React from 'react'
import { Paper } from '@material-ui/core';

const Cart = () => {
  return (
    <Paper square={false} elevation={3}>
    {/* <div style={{
      border: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '1rem',
      marginBottom: '1.5rem',
      borderRadius: '4px',
    }}> */}
      <h4>Course Cart</h4>
  
      <p>Your cart is currently empty!</p>
    </Paper>
  )
}

export default Cart;
