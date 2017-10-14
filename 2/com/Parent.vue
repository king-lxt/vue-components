<template>
	<div>
		{{ message }}
		<hr />
		<v-child ref='myContent'></v-child>
		<button @click="getChildFn()">获取子组件</button>
	</div>
</template>

<script>
	import Child from './Child.vue'
	export default {
		data() {
			return {
				message: "我是父组件",
				childMsg: ''
			}
		},
		methods: {
			getChildFn() {
				//获取到子组件的方法
				this.$refs.myContent.run();
				//获取到子组件的属性
				console.log("message", this.$refs.myContent.message)
			},
			parentFn() {
				alert("我是父组件内容");
			}

		},
		components: {
			'v-child': Child
		}
	}
</script>

<style>

</style>