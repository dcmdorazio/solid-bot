module.exports = {
	name: 'ping',
	description: 'ping',
	execute(message, args) {
		message.channel.send('are you serious rn');
	},
};