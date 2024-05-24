import React from "react";

function TodoItem(props){
  const onRemoveClick= () => {
    props.onRemove(props.index);
  }
  
    return(
        <li className="d-flex justify-content-between list-group-item">{props.str} <i className="icon__x" onClick={onRemoveClick}>X</i></li>
    )
}

export default TodoItem;