import React, { useEffect } from "react";

//include images into your bundle
import TodoList from "./todoList";
import TodoInput from "./todoInput";
import { useState } from "react";

const user = 'kath';

//create your first component
const Home = () => { 
	const [strList, setStrList] = useState([]);
	const [error, setError] = useState(null);

	useEffect(()=>{
		getAllTodos();
	}, []);

	const getAllTodos = async ()=>{
		setError(null);
		let data = null;
		try{
			const res = await fetch(`https://playground.4geeks.com/todo/users/${user}`, { method:'GET' });
			data  = await res.json();

			if(!res.ok){
				console.log('error en respuesta', {res, data})
				if(res.status.toString().startsWith('4') && data.detail.includes("doesn't exist")){
					console.log('usuario no existe')
					// user does not exists
					await createUser();
					setstrList([]);
					return;
				}else{
					console.log("Error obteniendo To Do's")
					throw "Error obteniendo To Do's";
				}
			}

			setstrList(data.todos);	
		}catch(exception){
			console.log("Exception Catched 'getAllTodos'");
			setstrList([]);
			console.log({exception, data});
			setError(data?.detail || exception || 'Ocurrio un error');
		}
	};

	const addTodo = async (todoName) => {
		if(todoName.trim() === ""){
			return;
		}
		setError(null);
		const body = JSON.stringify({
			"label": todoName,
			"is_done": false
		});
		
		try{
			const res = await fetch(`https://playground.4geeks.com/todo/todos/${user}`, {
				method: 'POST',
				body: body,
				headers: {
					'Content-Type': 'application/json'
				},
			});
			if(!res.ok){
				console.log("Error creando usuario")
				throw "Error creando usuario";
			}

			getAllTodos();
		}
		catch(exception){
			console.log("Exception Catched 'add Todo'", );
			setError(exception || 'Ocurrio un error al crear todo');
		}
	};

	const removeTodo = async (todoId) => {
		setError(null);
		try{
			const res = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {method:'DELETE'});
			if(!res.ok){
				console.log('Error borrando ToDo: '+ todoId )
				throw 'Error borrando ToDo: '+ todoId;
			}
			getAllTodos();
		}catch(exception){
			console.log("Exception Catched 'Delete Todo'", );
			setError(exception || 'Error borrando ToDo');
			throw exception;
		}
		
    };

	const clearTodos = async () => {
		try{
			for(let el of strList)
				await removeTodo(el.id);
		}catch(exception){
			console.log("Exception Catched 'Clear ToDos'", );
			setError(exception || 'Error borrando todos los ToDo');
		}

		getAllTodos();
	};

	const createUser = async ()=>{
		try{
			const res = await fetch(`https://playground.4geeks.com/todo/users/${user}`, {method:'POST'});
			if(!res.ok){
				throw "Error creando Usuario";
			}
		}catch(exception){
			throw exception;
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
						{ error && (<div className="alert alert-danger" role="alert">
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
