import React from 'react'
import { ThemeProvider, CssBaseline, Box, ListItemText } from '@material-ui/core';
import Nav from './Nav'
import theme from '../theme'

const Checkout = ( {cartList, numItems} ) => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline>
    <Box display="flex" alignItems="center" justifyContent="space-around">
      <Nav />
    </Box>
    <Box px={4} py={4}>
      <h4>Course Cart <span role="img" aria-label="cart">🛒</span></h4>
      <p>wahoo! you have checked out.</p>
      <p>Items: {numItems}</p>
      {cartList.map((c) => 
        (<ListItemText 
          primary={c.dept + ' ' + c.number} 
          secondary={c.title}>
        </ListItemText>)
      )}
    </Box>
    </CssBaseline>
    </ThemeProvider>
    </>
  )
}

export default Checkout;