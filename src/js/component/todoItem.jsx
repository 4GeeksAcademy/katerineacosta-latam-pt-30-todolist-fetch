import React from "react";

function TodoItem(props){
  const onRemoveClick= () => {
    props.onRemove(props.str);
  }
  
    return(
        <li>{props.str} <i className="fa fa-times" onClick={onRemoveClick}></i></li>
    )
}

export default TodoItem;