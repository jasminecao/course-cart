import React, { Component } from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Grid } from '@material-ui/core';

import Nav from './components/Nav'
import CoursesContainer from './components/CoursesContainer'
import CourseDescription from './components/CourseDescription'
import Courses from './components/Courses'
import Cart from './components/Cart'
import theme from './theme'

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box display="flex" alignItems="center" justifyContent="space-around">
            <Nav />
          </Box>
          <Box px={3} py={3}>
            {/* <div style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: '0 calc(1rem + 10%)',
            }}> */}
            <Grid container direction={'row'} spacing={4} >
              <Grid item xs={4}>
                <CoursesContainer />
              </Grid>
              <Grid item xs={4}>
                <CourseDescription />
              </Grid>
              <Grid item xs={4}>
                <Cart />
              </Grid>
            </Grid>
          </Box>
          <CssBaseline />
        </ThemeProvider>
      </>
    );
  }
}

export default App
