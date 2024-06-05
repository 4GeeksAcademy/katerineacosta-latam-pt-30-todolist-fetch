import React from "react";

//include images into your bundle
import TodoList from "./todoList";
import TodoInput from "./todoInput";
import { useState } from "react";

//create your first component
const Home = () => { 
	const [strList, setStrList] = useState([]);

	const addTodo = (todoName) => {
		console.log("home");
		if(todoName.trim() === ""){
			return;
		}
		setStrList([...strList, todoName])
		console.log(strList)
	} 

	const removeTodo = (index) => {
		setStrList(strList.filter((v, i)=> i != index) );
    }

	return (
		<>
			<div>
				<h1>todos</h1>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4 d-flex flex-column">
						<TodoInput onAdd={addTodo} />
						{ strList.length > 0 && <TodoList list={strList} onRemove={removeTodo} /> }
						{ strList.length == 0 && <p className="text-danger text-center">No hay tareas, por favor agrega alguna</p> }
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
