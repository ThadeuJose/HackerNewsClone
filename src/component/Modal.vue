<template>	
  <div class ='background' v-if='visible' :style="{ height: hbody + 'px' }">
  	<div class='modal'>
  		{{item}}
  	</div>  	
  </div>	
</template>

<script>
  export default { 
			data() {
        	return {
        		visible: false,
        		item: {},
			      hbody: 0
        	}
      },
      mounted() {
    		this.$root.$on('modal', data => {
      	  this.item = data;
      	  this.visible = true;
      	  document.body.classList.add('modal-open');
      	  this.hbody = document.body.scrollHeight;
    		});
			},		
      methods: {	
			},
	    components: { 
	    }
  }
</script>
<style scoped>
	.background{
		position: absolute;
		z-index: 9998;
		width: 100%;
		background-color: rgba(0, 0, 0, .5);
	}
	.modal{
		height: 900px;
		width: 900px;
		margin: auto;
		position: fixed;
		top: 50px;
		left:50%;
		transform:translate(-50%,0);
		margin: 0 auto;
		background-color:white;
	}
</style>


