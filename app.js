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
			{title: 'Post Three', content: 'Post three content'},
		]
	}
})