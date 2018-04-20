<script>
import InputTodo from "./InputTodo";
import list from "./List";

export default {
    name : 'todo-list',
    components : {InputTodo, list}
}
</script>
<style>
    * {  box-sizing: border-box;  }
    .header {
        background-color: purple; padding: 30px 30px;
        color: yellow; text-align: center;
    }
    .header:after {
        content: ""; display: table; clear: both;
    }
</style>
<template>
    <div id="todolist">
        <div id="header" class="header">
            <h2>Todo List App</h2>
            <InputTodo />
        </div>
        <list/>>
    </div>  
</template>