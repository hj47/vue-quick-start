import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../constant'

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    todolist : [
      { no : 1, todo : "영화보기", done:false },
      { no : 2, todo : "주말 산책", done:true },
      { no : 3, todo : "ES6 학습", done:false },
      { no : 4, todo : "잠실 야구장", done:false }
    ]
  },
  mutations : {
    [Constant.ADD_TODO] : (state, payload) => {
      if(payload != "")
        state.todolist.push({ no: new Date().getTime(), payload, done:false})
    },
    [Constant.DELETE_TODO] : (state, payload) => {
      let index = state.todolist.findIndex((todo) => todo.no===payload.no)
      state.todolist.splice(index, 1)
    },
    [Constant.DONE_TOGGLE] : (state, payload) => {
      let index = state.todolist.findIndex((todo) => todo.no===payload.no)
      state.todolist[index].done = !state.todolist[index].done
    }
  },
  actions : {
    [Constant.ADD_TODO] : ({commit}, payload) => {
      console.log("## ADD_TODO : ", payload);
      commit(Constant.ADD_TODO, payload)
    },
    [Constant.DELETE_TODO] : (store, payload) => {
      console.log("## DELETE_TODO : ", payload);
      store.commit(Constant.DELETE_TODO, payload)
    },
    [Constant.DONE_TOGGLE] : (store, payload) => {
      console.log("## DONE_TODO : ", payload);
      store.commit(Constant.DONE_TOGGLE, payload)
    }
  }
})
export default store