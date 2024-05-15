import React from "react";
import TodoItem from "./todoItem";

function TodoList(props){
    
    return(
        <>
            <ul>{props.list.map(str => <TodoItem key={str} str={str} onRemove={props.onRemove}/>)}</ul>
            <div>{props.list.length} item left</div>
        </>
    );
}

export default TodoList;