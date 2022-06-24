import content from './content';

export default {
	name: 'bot',
	type: 'document',
	title: 'Bot',
	fields: [
		{ name: 'name', type: 'string', title: 'Name' },
		{ ...content, name: 'description', title: 'Description' },
		{ name: 'inviteLink', type: 'string', title: 'Invite Link' },
	],
};