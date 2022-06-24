import content from './content';

export default {
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		{ name: 'title', type: 'string', title: 'Title' },
		{ ...content, name: 'body', title: 'Body' },
	],
};