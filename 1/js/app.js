import Vue from "vue";

import ParentCom from './../com/parent.vue';

new Vue({
	el:'#app',
	data:{
		msg:'Hello world'
	},
	components:{
		'v-parent':ParentCom
	}
})
