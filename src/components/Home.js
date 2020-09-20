import React, { Component } from 'react'
import '../App.css'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, Grid } from '@material-ui/core';

import Nav from './Nav'
import CoursesContainer from './CoursesContainer'
import CourseDescription from './CourseDescription'
import Cart from './Cart'
import theme from '../theme'

class Home extends Component {
  render() {
    return (
      <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Nav />
        </Box>
        <Box px={3} py={3}>
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
        </CssBaseline>
      </ThemeProvider>
      </>
    );
  }
}

export default Home