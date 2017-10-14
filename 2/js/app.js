import Vue from 'vue';
import Parent from './../com/Parent.vue';

new Vue({
	el:"#app",
	data:{
		msg:"hello"
	},
	methods:{
		
	},
	components:{
		'v-parent':Parent
	}
})
