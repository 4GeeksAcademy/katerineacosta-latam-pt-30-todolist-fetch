import React from "react";
import TodoItem from "./todoItem";
import TodoInput from "./todoInput";

function TodoList(props){
    
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div>
                        <div className="card" style={{width: "18rem"}}>
                            <ul className="list-group list-group-flush">{props.list.map((str, i) => <TodoItem key={i} str={str} index={i} onRemove={props.onRemove}/>)}</ul>
                            <div>{props.list.length} item left</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default TodoList;