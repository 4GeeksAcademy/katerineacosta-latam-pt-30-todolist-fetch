import React, { useState } from "react";

function TodoItem(props){
  const [icon, setIcon] = useState(false)

  const onRemoveClick= () => {
    props.onRemove(props.todo.id);
  }
  
    return(
        <li onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)} className="d-flex justify-content-between list-group-item p-3">{props.str} 
          {icon && <i className="icon__x" onClick={onRemoveClick}>X</i>}
        </li>
    )
}

export default TodoItem;