<template>
    <ul id="todolist">
        <li v-for="a in todolist" v-bind:class="checked(a.done)"
            v-on:click="doneToggle({ no:a.no })" :key="a.no">
            <span>{{ a.todo }}</span>
            <span v-if="a.done"> (완료)</span>
            <span class="close" v-on:click.stop="deleteTodo({ no:a.no })">&#x00D7;</span>
        </li>
    </ul>
</template>

<script>
import Constant from "../constant";
import { mapState, mapActions } from 'vuex'

export default {
    name : "list",
    computed : mapState(['todolist']),
    // HJ : [ use below when the name is defferent!! ]
    // {
    //     todolist : function () {
    //         return this.$store.state.todolist
    //     }
    // },
    methods : {
        checked (done) {
            return { checked: done}
        },
        ...mapActions([Constant.DONE_TOGGLE, Constant.DELETE_TODO]),

        // HJ : [ use below when the name is defferent!! ]
        // ...mapMutations({
        //     aa : Constant.DONE_TOGGLE, 
        //     bb : Constant.DELETE_TODO
        // })
    }
}
</script>
<style>
* {  box-sizing: border-box;  }
ul {  margin: 0; padding: 0; }
ul li { 
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;  
}
ul li:hover {  background: #ddd;  }
ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px; 
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 8px 12px 8px 12px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>

