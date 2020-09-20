import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

function formatTime(time) {
  return time.start_time + "-" + time.end_time + " " + time.meeting_days;
}

const mapStateToProps = state => {
  return state.descrip;
}

const CourseDescription = (descrip) => {
  const [info, setInfo] = useState({courses: []})

  //store API response in info
  useEffect(() => {
    if (descrip.title !== '') {
     async function callAPI(descrip) {
        const response = await fetch('https://api.pennlabs.org/registrar/search?q=cis-' + descrip.number);
        const body = await response.json();
        return body;
      }
      callAPI(descrip).then(res => {if (res.length !== 0) setInfo(res)}).catch(err => console.log(err));
    }
  })

  return (
    <Paper square={false} elevation={3}>
      <h4>Course Description</h4>
      {
        descrip.title === '' ? <p>Click on a course to learn more</p> :
        <>
          <h4 style={{color: '#000000'}}>{descrip.dept + descrip.number + ": " + descrip.title}</h4>
          {descrip.prereqs ? <p>Prerequisites: {descrip.prereqs.join("; ")}</p> : ''}
          {info.courses.length !== 0 && info.courses[0].instructors.length !== 0
            ? <p>Instructor: {info.courses[0].instructors.map((i) => (i.name + "; "))}</p>
            : ''}
          {info.courses.length !== 0 && info.courses[0].meetings.length !== 0
            ? <p>Time: {formatTime(info.courses[0].meetings[0])}</p>
            : ''}
          <p>{descrip.description}</p>
        </>
      }
    </Paper>
  )
}

export default connect(mapStateToProps)(CourseDescription);
