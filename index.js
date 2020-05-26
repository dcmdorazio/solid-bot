const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Signed in as ${client.user.tag} :D`);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

    if (command.args && !args.length) {
        return message.reply(`You didn't provide any arguments`);
    }

    try {
        command.execute(message, args);
    } catch (e) {
        console.error(e);
        message.reply("There was an error executing your command");
    }

});


client.login(token);