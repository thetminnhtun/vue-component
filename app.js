Vue.component('create-post', {
	template: `
		<div>
			<input v-model="title" placeholder="Enter post title"><br><br>
			<input v-model="content" placeholder="Enter post content"><br><br>
			<button @click="createPost">Create</button>
		</div>
	`,
	data() {
		return {
			title: '',
			content: ''
		}
	},
	methods: {
		createPost() {
			this.$emit('create', {
				title: this.title,
				content: this.content
			})
			this.title = '',
			this.content = ''
		}
	}
})


Vue.component('post', {
	template: `
	<div>
		<h1>{{ name }}</h1>
		<p>{{ content }}</p>
	</div>
	`,
	props: {
		name: {
			type: String,
			default: 'This is default title'
		},
		content: String
	}
})

new Vue({
	el: '#app',
	data: {
		posts: [
			{title: 'Post One', content: 'Post one content'},
			{title: 'Post Two', content: 'Post two content'},
		]
	},
	methods: {
		insertPost(post) {
			if(post.title && post.content) {
				this.posts.push(post)
			}
		}
	}
})