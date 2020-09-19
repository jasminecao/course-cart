import React, {useState} from 'react'
import courses from '../data/courses'
import { ListItem, ListItemText, Paper } from '@material-ui/core';

const Courses = props => {
  const {courseList} = props
  const [selected, setSelected] = useState('');

  const handleClick = (e, id) => {
    setSelected(id);
  }

  return (
    <>
    {courseList.map(({ dept, number, title }) => (
      <ListItem
        button
        selected={selected === `${dept}-${number}`}
        onClick={e => handleClick(e, `${dept}-${number}`)}>
        <ListItemText 
          primary={dept + ' ' + number} 
          secondary={title}>
        {/* <p key={`${dept}-${number}`}> */}

        </ListItemText>
      </ListItem>
    ))}
    </>
  )
}

export default Courses;
