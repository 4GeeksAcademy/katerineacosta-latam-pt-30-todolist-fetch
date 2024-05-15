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
		setstrList([...strList, todoName])
		console.log(strList)
	} 

	const removeTodo = (todoName) => {
        const index = strList.indexOf(todoName);
		if(index > -1){
			strList.splice(index, 1);
			setstrList([...strList]);
		}
    }

	return (
		<>
			<TodoInput onAdd={addTodo} />
			<TodoList list={strList} onRemove={removeTodo} />
		</>
	);
};

export default Home;
