<template>	
  <div class ='background' v-if='visible' :style="{ height: hbody + 'px' }" @click='hidden()'>
  	<div class='modal' v-on:click.stop>
  		{{item}}
			<div>
				<p>{{item.title}}</p>
				<p>{{item.text}}</p>
				<p>{{item.by}}</p>
				<p>{{item.time}}</p>
  		</div>
  		{{comments}}
  	</div>  	
  </div>	
</template>

<script>
  export default { 
			data() {
        	return {
        		visible: false,
        		item: {},
        		comments: {},
			      hbody: 0
        	}
      },
      mounted() {
	      this.$root.$on('modal', data => {
      	  this.item = data;
      	  this.$store.dispatch('LOAD_COMMENTS',this.item.kids);    		
      	  this.comments = this.$store.getters.comments;
      	  this.visible = true;
      	  document.body.classList.add('modal-open');
      	  this.hbody = document.body.scrollHeight;
    		});
			},		
      methods: {
      	hidden() {
      		this.visible = false;
      		document.body.classList.remove('modal-open');
      	}	
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
		overflow-y:scroll;
	}
</style>


