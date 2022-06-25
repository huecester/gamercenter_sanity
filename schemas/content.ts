import image from './image';

export default {
	type: 'array',
	of: [
		{ type: 'block' },
		image,
	],
};