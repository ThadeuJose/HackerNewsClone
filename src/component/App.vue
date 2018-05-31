<template>	
    <div class="app">    
    	<Modal></Modal>
    	<Header></Header>
    	<Menu></Menu>
    	<List></List>    	
    </div>
</template>

<script>
	import Header from './Header.vue'
	import Menu from './Menu.vue'
	import List from './ListOfPost.vue'
	import Modal from './Modal.vue'
	
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
	    	Header,Menu,List,Modal
	    }
  }
</script>

