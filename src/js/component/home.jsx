import React from "react";

//include images into your bundle
import TodoList from "./todoList";
import TodoInput from "./todoInput";
import { useState } from "react";

//create your first component
const Home = () => { 
	const [strList, setstrList] = useState([]);

	const addTodo = (todoName) => {
		console.log("home");
		if(todoName.trim() === ""){
			return;
		}
		setstrList([...strList, todoName])
		console.log(strList)
	} 

	const removeTodo = (index) => {
		strList.splice(index, 1);
		setstrList([...strList]);
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
						<TodoList list={strList} onRemove={removeTodo} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
