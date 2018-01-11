//  Core

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

// Functions

client.on('ready', () => {
    console.log('Your orders, captain?');
});

client.on('message', message => {
    if (message.content == 'Salute!') {
        message.reply('Yessir!');
    }
});
