import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./todoList";
import TodoInput from "./todoInput";
import TodoItem from "./todoItem";
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
		<div className="container__todo">
			<div>
				<h1>TODO</h1>
			</div>
			<TodoInput onAdd={addTodo} />
			<TodoList list={strList} onRemove={removeTodo} />
		</div>
		</>
	);
};

export default Home;
