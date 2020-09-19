import React from 'react'
import { connect } from "react-redux";
import { Paper, Card } from '@material-ui/core';

const mapStateToProps = state => {
  return { descrip: state.descrip};
}

const CourseDescription = (state) => {
  const { descrip } = state

  return (
    <Paper square={false} elevation={3}>
    {/* <div style={{
      border: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '1rem',
      marginBottom: '1.5rem',
      borderRadius: '4px',
    }}> */}
      <h4>Course Description</h4>
      {
        descrip.title === '' ? <p>Click on a course to learn more</p> :
        <>
          <h4>{descrip.dept + descrip.number + ": " + descrip.title}</h4>
          {descrip.prereqs 
            ? <p>Prerequisites: {descrip.prereqs.join("; ")}</p> 
            : ''
          }
          <p>{descrip.description}</p>
        </>
      }
    </Paper>
  )
}

export default connect(mapStateToProps)(CourseDescription);
