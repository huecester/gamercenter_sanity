import content from './content';
import image from './image';

export default {
	name: 'bot',
	type: 'document',
	title: 'Bot',
	fields: [
		{ name: 'name', type: 'string', title: 'Name' },
		{ ...image, name: 'icon', title: 'Icon' },
		{ ...content, name: 'description', title: 'Description' },
		{ name: 'inviteLink', type: 'string', title: 'Invite Link' },
	],
};