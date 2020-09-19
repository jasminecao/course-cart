import React, {useState} from 'react'
import courses from '../data/courses'
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Icon } from '@material-ui/core';
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

const CourseItem = ({ setDescrip, course}) => {
  // const {courseList} = props
  console.log(course);
  const [selected, setSelected] = useState('');

  const handleClick = (e, id, c) => {
    setSelected(id);
    setDescrip(c)
  }

  return (
    <>
    <ListItem
        button
        ContainerComponent="div"
        // selected={selected === `${course.dept}-${course.number}`}
        onClick={e => handleClick(e, `${course.dept}-${course.number}`, course)}>
        <ListItemText 
          primary={course.dept + ' ' + course.number} 
          secondary={course.title}>
        {/* <p key={`${dept}-${number}`}> */}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="add">
            <Icon>add</Icon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);