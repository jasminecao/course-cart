import React, {useState} from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Icon } from '@material-ui/core';
import { connect } from 'react-redux'
import { setDescrip, addCart, removeCart } from '../redux/actions'

const mapStateToProps = state => {
  return {
    numItems: state.numItems
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setDescrip: (descrip) => dispatch(setDescrip(descrip)),
    addCart: (c) => dispatch(addCart(c)),
    removeCart: (c) => dispatch(removeCart(c)),
  }
}

const CourseItem = ({numItems, setDescrip, addCart, removeCart, course}) => {
  const [add, setAdd] = useState(false); //flag for if course is in cart

  const handleClick = (e, c) => {
    setDescrip(c);
  }

  const handleCartClick = (e, c) => {
    //course is already in cart
    if (add) {
      setAdd(false);
      removeCart(c);
    } 
    //less than 7 items in cart
    if (numItems <= 6) {
      //course is not in cart
      if (!add) {  
        setAdd(true);
        addCart(c);
      }
    }
  }

  return (
    <>
    <ListItem
      button
      ContainerComponent="div"
      selected={add}
      onClick={e => handleClick(e, course)}>
      <ListItemText 
        primary={course.dept + ' ' + course.number} 
        secondary={course.title}>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton 
          onClick={e => handleCartClick(e, course)}
          edge="end" 
          aria-label="add">
          { add ? (<Icon>delete</Icon>) :(<Icon>add</Icon>)}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);