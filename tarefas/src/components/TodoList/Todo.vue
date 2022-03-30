<template>
    <div class="todo" :class="statusClass">
        <p>{{ tarefa.nome }}</p>
    </div>
</template>

<script>
export default {
    props: { tarefa: String },
    computed: {
        statusClass() {
            return {
                pending: this.tarefa.status,
                done: !this.tarefa.status
            }
        }
    }
}
</script>

<style>
    .todo{
        box-sizing: border-box;
        width: 350px;
        height: 125px;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin: 10px; 
        transition: ease-in-out 0.2s;
    }
    .todo:hover{
        transform: scale(1.1);
    }
    .pending{
        background-color: brown;
    }
    .done{
        background-color:cadetblue;
        text-decoration: line-through;
        color: #ddd;
    }
</style>