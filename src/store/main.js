import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function get_items(id){
 	return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => {
		return  response.data;	 	  		
	}, (err) => {
		return err;
	})	
}

const state = {
	stories:[],
	comments:[]
}

const actions = {
	LOAD_COMMENTS: function ({ commit },ids) {
		for(let i of ids){
			get_items(ids[0]).then((response) => {	 		
				commit('ADD_COMMENTS', { elem: response })			 	
			}, (err) => {
				console.log(err)
			})
		}
  },
	LOAD_STORIES: function ({ commit }) {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => {
      const storyIDs = response.data
      const maxStories = 30;
      for(let i=0; i<maxStories; i++){
      	let id = storyIDs[i];
      	get_items(id).then((response) => {	 		
					commit('ADD_STORIES', { elem: response })			 	
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
  },      
  
  ADD_COMMENTS: function (state, { elem }) {
    state.comments.push(elem);
  }	
}

const getters = {
	stories:states => {
		return states.stories;
	},
	comments:states => {
		return states.comments;
	}
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
