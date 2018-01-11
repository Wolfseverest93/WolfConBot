//  Core  //

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Your orders, captain?');
});


//  Variables  //

new var = CY1

CY1 = 0


//  Open Functions  //

client.on('message', message => {
    if (message.content == 'Salute!') {
        message.reply('Yessir!');
    }
});


//  Moderator Functions  //

client.on('message', message => {
    if (message.content == '+Cleanup') {
        if (message.member.roles.some(r=>["Big Bad Wolf!", "Knights of the Hammer!"].includes(r.name)) ) {
            message.reply('Beginning cleanup module!');
            console.log('Beginning cleanup module!');
            CY1 = 1
        } else {
            message.reply('You do not have permission to do that!');
        }
    }
});


//  Cycle One Functions  //

while CY1 == 1 {
    if (message.deletable) {
        message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author}`))
            .catch(console.error);
        CY1 = 2
    } else {
        console.log('No further messages to remove!')
        CY1 = 0
    }
});
while CY1 == 2 {
    if (message.deletable) {
        message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author}`))
            .catch(console.error);
        CY1 = 1
    } else {
        console.log('No further messages to remove!')
        CY1 = 0
    }
});


//  Bot Login //

client.login(process.env.BOT_TOKEN);
