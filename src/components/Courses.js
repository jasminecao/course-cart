import React, {useState} from 'react'
import courses from '../data/courses'
import { ListItem, ListItemText, Paper } from '@material-ui/core';
import { connect } from 'react-redux'
import { setDescrip } from '../redux/actions'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    setDescrip: (descrip) => dispatch(setDescrip(descrip))
  }
}

const Courses = ({ setDescrip, courseList}) => {
  // const {courseList} = props
  const [selected, setSelected] = useState('');

  const handleClick = (e, id, c) => {
    setSelected(id);
    setDescrip(c)
  }

  return (
    <>
    {courseList.map((c) => (
      <ListItem
        button
        selected={selected === `${c.dept}-${c.number}`}
        onClick={e => handleClick(e, `${c.dept}-${c.number}`, c)}>
        <ListItemText 
          primary={c.dept + ' ' + c.number} 
          secondary={c.title}>
        {/* <p key={`${dept}-${number}`}> */}

        </ListItemText>
      </ListItem>
    ))}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
