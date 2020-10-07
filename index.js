const Discord = require('discord.js')
const fs = require('fs');
const config = require('./config.js');


const client = new Discord.Client();

const prefix = '!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Shush is online!')
});

client.on('message', (message) => {
    if(!(message.content.startsWith(prefix)) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    client.commands.get(command).execute(message, args);
});

client.login(config.key);