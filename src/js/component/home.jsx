import React, { useEffect } from "react";

//include images into your bundle
import TodoList from "./todoList";
import TodoInput from "./todoInput";
import { useState } from "react";

//create your first component
const Home = () => { 
	const [strList, setStrList] = useState([]);

	useEffect(()=>{
		getAllTodos();
	}, []);

	const getAllTodos = async ()=>{
		const res = await fetch('https://playground.4geeks.com/todo/users/kath', { method:'GET' });
		const data = await res.json();
		setstrList(data.todos)		
	};

	const addTodo = async (todoName) => {
		if(todoName.trim() === ""){
			return;
		}
		const body = JSON.stringify({
			"label": todoName,
			"is_done": false
		});
		const result = await fetch('https://playground.4geeks.com/todo/todos/kath', {
			method: 'POST',
			body: body,
			headers: {
				'Content-Type': 'application/json'
			},
		});
		getAllTodos();
	};

	const removeTodo = async (todoId) => {
		const result = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {method:'DELETE'});
		getAllTodos();
    };

	const clearTodos = async () => {
		for(let el of strList){
			await fetch(`https://playground.4geeks.com/todo/todos/${el.id}`, {method:'DELETE'});
		}
		getAllTodos();
	};

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
						<div>
							<button type="button" className="btn btn-primary" onClick={clearTodos} >Limpiar</button>
						</div>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default Home;
