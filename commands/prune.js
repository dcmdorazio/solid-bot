module.exports = {
	name: 'prune',
    description: 'prunes specified number of messages',
    args: true,
    aliases: ['delete', 'thin'],
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("That's not a valid number");
        } else if (amount <= 1 || amount > 100){
            return message.reply("Please provide an integer between 1 and 99");
        }

        message.channel.bulkDelete(amount, true).catch(e => {
            console.error(e);
            message.reply("There was an error pruning these commands");
        });
	},
};