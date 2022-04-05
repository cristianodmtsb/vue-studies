<template>
    <div 
    @click="$emit('todoStatusChange', todo)"
    class="todo" :class="statusClass">
        <span @click.stop="$emit('todoDeleted', tarefa)" class="close">x</span>
        <p>{{ tarefa.nome }}</p>
    </div>
</template>

<script>
export default {
    props: { tarefa: String },
    computed: {
        statusClass() {
            return {
                status: this.tarefa.status,
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
        position: relative;
    }
    .todo:hover{
        transform: scale(1.1);
    }
    .status{
        background-color: brown;
    }
    .status .close{
        background-color: #0003;
    }
    .done{
        background-color:cadetblue;
        text-decoration: line-through;
        color: #ddd;
    }
    .done .close{
        background-color: #0003;
    }
    .close{
        border-radius: 50%;
        padding: 1px 7px 5px 7px;
        position: absolute;
        top:10px;
        right: 10px;
    }
</style>