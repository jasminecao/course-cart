import React, {useState, useEffect} from 'react'
import courses from '../data/courses'
import { Paper, Icon } from '@material-ui/core';
import Courses from './Courses.js'
import CourseItem from './CourseItem.js'

const CourseContainer = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = React.useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // tried to include as many cases as possible. can definitely be refined.
  useEffect(() => {
    const results = courses.filter(e => 
      e.dept.includes(search.toUpperCase()) ||
      search.toUpperCase().includes(e.dept + ' ' + e.number.toString()) ||
      search.toUpperCase().includes(e.dept + e.number.toString()) ||
      e.number.toString().includes(search) ||
      e.title.includes(search) ||
      e.description.includes(search) ||
      e.description.includes(search.toLowerCase()) ||
      (e.hasOwnProperty('prereqs') ? e.prereqs.includes(search) : false)
    );
    setFiltered(results);
  }, [search]);

  return (
    <>
    <Paper square={false} elevation={3}>
    <h4>Course List</h4>
    <input className="search" type="text" placeholder="search for a course..." value={search} onChange={handleChange}/>
      {filtered.map((c) => 
        (<CourseItem course={c} />)
      )}
      <Courses courseList={filtered}/>
    </Paper>
    </>
  )
}

export default CourseContainer;
