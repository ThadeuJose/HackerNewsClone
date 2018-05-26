<template>	
    <div class="app">
    	<Header></Header>
    	<Menu></Menu>
    	<List></List>    	
    </div>
</template>

<script>
	import Header from './Header.vue'
	import Menu from './Menu.vue'
	import List from './ListOfPost.vue'

  export default {    
      data() {
          return {
              msg: 'Hello world!'
          }   
      },
      mounted(){
      	this.$store.dispatch('LOAD_STORIES');
      },        
	    components: { 
	    	Header,Menu,List 
	    }
  }
</script>


