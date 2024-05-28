import React from "react";
import TodoItem from "./todoItem";

function TodoList(props){
    
    return(
        <>
            <div>
                <ul className="list-group list-group-flush">{props.list.map((todo, i) => <TodoItem key={i} todo={todo} index={i} onRemove={props.onRemove}/>)}</ul>
                <div className="text-black-50 list__counter p-2">{props.list.length} item left</div>
            </div>    
        </>
    );
}

export default TodoList;