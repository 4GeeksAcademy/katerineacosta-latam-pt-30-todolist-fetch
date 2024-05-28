import React, { useEffect } from "react";

//include images into your bundle
import TodoList from "./todoList";
import TodoInput from "./todoInput";
import { useState } from "react";

//create your first component
const Home = () => { 
	const [strList, setStrList] = useState([]);
	const [error, setError] = useState(null);

	useEffect(()=>{
		getAllTodos();
	}, []);

	const getAllTodos = async ()=>{
		setError(null);
		// try{
		// 	const res = await fetch('https://playground.4geeks.com/todo/users/kaths', { method:'GET',  });
		// 	const data = await res.json();
		// 	if(res.status.toString()[0] != '2'){
		// 		throw data;
		// 	}
		// 	setstrList(data.todos)		
		// }catch (error){
		// 	setstrList([]);
		// 	console.log(error);
		// 	setError(error.detail);
		// }

			const res = await fetch('https://playground.4geeks.com/todo/users/kath', { method:'GET' });
			const data = await res.json();

			// success
			if(res.status.toString()[0] == '2'){
				setStrList(data.todos);	
			// user does not exists
			}else if(res.status.toString()[0] == '4' && data.detail.includes("doesn't exist")){
				createUser();
				setStrList([]);
			// other errors
			}else{
				setStrList([]);
				console.log(error);
				setError(error.detail);	
			}
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

	const createUser = async ()=>{
		const result = await fetch('https://playground.4geeks.com/todo/users/kath', {method:'POST'});
		
		/* success */
		if( false ){

		/* error */
		}else{

		}
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
						<div className="d-grid">
							<button type="button" className="btn list__btn mt-2 " onClick={clearTodos} >Borrar todo</button>
						</div>
						{ error && (<div class="alert alert-danger" role="alert">
							{error}
						</div>)
						}
					</div>
					
				</div>
				
				
			</div>
		</>
	);
};

export default Home;
