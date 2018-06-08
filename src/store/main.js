import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	stories:[],
	comments:[]
}

const actions = {
	GET_ITEMS:({ commit },id)=>{
	 	return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((response) => {
			return  response.data;	 	  		
		}, (err) => {
			return err;
		})	
	},

	LOAD_COMMENTS: ({ dispatch, commit },ids) => {
		if(ids){
			for(let id of ids){
				dispatch('GET_ITEMS',id).then((response) => {	 					
					commit('ADD_COMMENTS', { elem: response })			 	
				}, (err) => {
					console.log(err)
				})
			}
		}
  },
  
	LOAD_STORIES: ({ dispatch, commit }) => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => {
      const maxStories = 30;
      const ids = response.data.slice(0,30);
      for(let id of ids){
      	dispatch('GET_ITEMS',id).then((response) => {	 		
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
