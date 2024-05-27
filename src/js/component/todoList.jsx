import React from "react";
import TodoItem from "./todoItem";

function TodoList(props){
    
    return(
        <>
            <div>
                <ul className="list-group list-group-flush">{props.list.map((str, i) => <TodoItem key={i} str={str} index={i} onRemove={props.onRemove}/>)}</ul>
                <div className="text-black-50 list__counter p-2">{props.list.length} item left</div>
            </div>    
        </>
    );
}

export default TodoList;