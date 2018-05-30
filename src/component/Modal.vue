<template>	
  <div v-if='visible'>Modal{{visible}}{{item}}</div>	
</template>

<script>
  export default { 
  		props: ['item','visible'],   		
      computed: {				
			},
	    components: { 
	    }
  }
</script>
<style scoped>
	
</style>


