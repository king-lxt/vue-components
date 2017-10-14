<template>
	<div>
		<p class="child">{{ msgs }}</p>
		<button @click="sendToParent()">子组件向父组件传值</button>
		{{ msg }}
	</div>
</template>

<script>
	export default{
		//父组件想子组件传递内容
		props: ['msg'],
		data(){
			return {
				msgs:"我是子组件",
				childMsg:'我是子组件传递到父组件的内容'
			}
		},
		//子组件像父组件传递内容
		//to-parent是起的名字
		methods:{
			sendToParent(){
				this.$emit('to-parent',this.childMsg)
			}
		}
	}
</script>

<style scoped="">
	.child{
		padding: 5px;
		font-size: 18px;
	}
</style>