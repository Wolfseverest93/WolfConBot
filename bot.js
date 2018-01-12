//  Core  //

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log('Your orders, captain?');
});


//  Open Functions  //

client.on('message', message => {
    if (message.content == 'Salute!') {
        message.reply('Yessir!');
    }
});


//  Moderator Functions  //

//client.on('message', message => {
//    if (message.content == 'Cleanup!') {
//        if (message.member.roles.some(r=>["Big Bad Wolf!", "Knights of the Hammer!"].includes(r.name)) ) {
//            console.log('Beginning cleanup module!');
//            var intervalCleanup =
//        } else {
//            message.reply('You do not have permission to do that!');
//        }
//    }
//});

client.on('message', message => {
    if (message.content == 'Purge!') {
        if (message.member.roles.some(r=>["Big Bad Wolf!", "Knights of the Hammer!"].includes(r.name)) ) {
            console.log('Purging messages!')
            message.channel.bulkDelete(20, [1])
        } else {
            message.reply('You do not have permission to do that!');
        }
    }
});
