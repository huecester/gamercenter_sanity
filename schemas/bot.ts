export default {
	name: 'bot',
	type: 'document',
	title: 'Bot',
	fields: [
		{ name: 'name', type: 'string', title: 'Name' },
		{ name: 'description', type: 'array', of: [ { type: 'block' } ], title: 'Description' },
		{ name: 'invite_link', type: 'string', title: 'Invite Link' },
	],
};