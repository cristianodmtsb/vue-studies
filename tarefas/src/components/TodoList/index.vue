<template>
    <div class="todoList">
        <template v-if="tarefas.length">
            <Todo 
                v-for="(tarefa, i) in tarefas" 
                @todoDeleted="$emit('todoDeleted', $event)"
                @todoStatusChange="$emit('todoStatusChange', i)"
                :key="tarefa.nome"
                :tarefa="tarefa" 
            />
        </template>
        <p v-else class="no-task">Sem atividades para fazer</p>
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
.no-task{
    color: #AAA;
    font-size: 1.7rem;
}
</style>