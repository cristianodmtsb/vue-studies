<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TodoList :tarefas="tarefas" />
	</div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
	components: {
		TodoList
	},
	data() {
		return {
			tarefas: [
				{
					id: 1,
					nome: 'Estudar Vue',
					status: true,
				},
				{
					id: 2,
					nome: 'Estudar Vuex',
					status: false,
				},
				{
					id: 3,
					nome: 'Estudar Vue Router',
					status: false,
				},
			],
		};
	},
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
