<template>	
    <div class='post-box' v-if = '!item.hide' @click = 'modal(item)'>
    	<div class="upvote-box">				
				<icon class='icon' name="chevron-up" scale="1.5"></icon>
        <p class="upvote">{{item.score}}</p>
      </div>
      <div class="title-box">
        <p class="title">{{item.title}}</p>
        <a v-on:click.stop :href=item.url target="_blank" rel="noopener" class="link" v-if=item.url>({{item.url | urlShortner}})</a>
        <p class="author">by {{item.by}}</p>
        <p class="time">{{item.time | time}}</p>
      </div>
      <div class="icon-close-box">      	
      	<span v-on:click.stop='hidden(item)'><icon class='icon icon-close' name="regular/times-circle" scale="1.5" ></icon></span>
      </div>      
    </div>
</template>

<script>
		import 'vue-awesome/icons/regular/times-circle'
		import 'vue-awesome/icons/chevron-up'
		import moment from 'moment'
				
    export default {    
        props: ['item'],
        filters: {
					urlShortner: function (value) {
						if (!value) return ''
						value = value.toString()
						value = value.replace('https://','');
						value = value.replace('http://','');
						value = value.split("/")[0];						
						return value.split('.').slice(-2).join('.');
					},
					time: function (value) {
						return moment.unix(value).fromNow();
					}
				},
				methods:{
					hidden(item) {
						console.log("Clicou");
						item.hide = !item.hide;
					},
					modal(item) {
						console.log("Clicou no modal");							
						this.$root.$emit('modal', item);
					},				
				},
		    components: {
		    }
    }
</script>

<style scoped>
	.post-box {
	  display: flex;
	  border: 1px solid black;
	  padding: 5px;
	  margin-top:10px;
	  cursor: pointer;
	}
	
	.post-box:hover {
  	border: 1px solid #fd9644;
	}
	
	.title-box {
		padding: 5px;
		width: 100%;
	}

	.title{
		display: inline-block;
		padding-bottom: 5px;
	}

	.link {
		text-decoration:none;
		font-size: 95%;
	}
	
	.author {
		padding-bottom: 5px;
	}

	.upvote-box {
		padding: 5px;
		display: inline-block;
		text-align: center;
	}	

	.icon {
		margin: 0 auto;
	}

	.icon-close-box {
		padding:  5px 10px 5px 5px;
	}

	.icon-close:hover {
		color: #fd9644;
	}
</style>


