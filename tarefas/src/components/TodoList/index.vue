<template>
    <div class="todoList">
        <template>
            <Todo 
                v-for="tarefa in tarefas" 
                :key="tarefa.nome"
                :tarefa="tarefa" 
            />
        </template>
    </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
    components: {
        Todo
    },
    props: {
        tarefas: Array,
    },
}
</script>

<style>
.todoList{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>