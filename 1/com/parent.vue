<template>
	<div>
		<p  class="parent">{{ msgs }}</p>
		<!--自定义的方法不要带()-->
		<v-child :msg='msg' class="child" @to-parent='getChildData'></v-child>
		{{ childMsg }}
	</div>
</template>

<script>
	import Child from './child.vue';

	export default {
		data() {
			return {
				msg: "我是父组件内容",
				msgs:"我是父组件",
				childMsg:''
			}
		},
		methods:{
			getChildData(childData){
				this.childMsg = childData;
				console.log(this.childMsg)
			}
		},
		components: {
			'v-child': Child
		}
	}
</script>

<style scoped>
	.parent {
		font-size: 24px;
		color: greenyellow;
	}
	.child{
		padding: 5px;
		font-size: 18px;
	}
</style>