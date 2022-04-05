<template>
    <div class="new-todo">
        <input v-model="name" @keydown.enter="add" type="text" class="form-element" placeholder="Nova Tarefa?">
        <button class="form-element" @click="add">+</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: ''
        }
    },
    methods: {
        add() {
            this.$emit('todoAdded', {name: this.name, pending: true})
            this.name = ''
        }
    }
}
</script>

<style>
    .new-todo{
        margin: 35px;
    }
    .form-element{
        outline: none;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;
    }
    input.form-element{
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    button.form-element{
        border-left: none;
        background: cornflowerblue;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
    }
</style>