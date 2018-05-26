import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	stories:[]
}

const actions = {
	LOAD_STORIES: function ({ commit }) {

    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => {
      const storyIDs = response.data
      const maxStories = 30;
      for(let i=0; i<maxStories; i++){
      	let id = storyIDs[i];
      	axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => {
      		commit('ADD_STORIES', { elem: response.data })			 	
      		console.log("Terminou ...")
      	}, (err) => {
      		console.log(err)
    		})
      }      
    }, (err) => {
      console.log(err)
    })
  }
}

const mutations = {
	  
  ADD_STORIES: function (state, { elem }) {
  	elem.hide = false;
    state.stories.push(elem);
  }      
	
}

const getters = {
	stories:states => {
		return states.stories;
	}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
