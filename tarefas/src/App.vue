<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TodoInput @todoAdded="addTodo" />
		<StatusBarr :progress="progress" />
		<TodoList 
			:tarefas="tarefas" 
			@todoDeleted="deleteTodo" 
			@todoStatusChange="toggleTodoStatus" 
		/>
	</div>
</template>

<script>
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import StatusBarr from './components/StatusBar'

export default {
	components: {
		TodoList,
		TodoInput,
		StatusBarr
	},
	data() {
		return {
			tarefas: [],
		};
	},
	computed: {
		progress() {
			const total = this.tarefas.length
			const done = this.tarefas.filter(t => !t.status).length
			return Math.round(done / total * 100) || 0
		}

	},
	watch: {
		tarefas: {
			deep: true,
			handler() {
				localStorage.setItem('todoList', JSON.stringify(this.tarefas))
			}
		}
	},
	methods: {
		addTodo(todo){
			const sameName = t => t.nome === todo.name
			const reallyNew = this.tarefas.filter(sameName).length == 0
			if(reallyNew){
				this.tarefas.push({
					nome: todo.name,
					status: todo.status || true
				})
			}
		},
		deleteTodo(todo){
			const i = this.tarefas.indexOf(todo)
			this.tarefas.splice(i, 1)
		},
		toggleTodoStatus(i){
			this.tarefas[i].status = !this.tarefas[i].status
		}
	},
	created() {
		const json = localStorage.getItem("todoList")
		const array = JSON.parse(json)
		this.tarefas = Array.isArray(array) ? array : []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
