<template>
	<div>
		{{ message }}
		<hr />
		<button @click="getParentData()">获取父组件内容和方法</button>
	</div>
</template>

<script>
	import Child from './Child.vue'
	export default {
		data() {
			return {
				message: "我是子组件"
			}
		},
		methods: {
			run() {
				console.log('通过refs获取到子组件的方法')
			},
			getParentData(){
				//获取到父组件的方法
				this.$parent.parentFn();
				//获取到父组件的属性
				alert(this.$parent.message)
			}
		},
	}
</script>

<style>

</style>