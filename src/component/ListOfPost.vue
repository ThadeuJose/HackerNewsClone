<template>	
    <main>
		<postBox v-for="item in stories" :key="item.id" :item="item"> </postBox>
    </main>
</template>

<script>
	import postBox from './PostBox.vue'
  export default {  
  		data() {
          return {
              stories: this.$store.getters.stories,
          }   
      },  
      computed: {
			},
	    components: { 
	    	postBox	
	    }
  }
</script>

