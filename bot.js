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

client.on('message', message => {
    if (message.content == '+Cleanup') {
        if (message.member.roles.some(r=>["Big Bad Wolf!", "Knights of the Hammer!"].includes(r.name)) ) {
            message.reply('Beginning cleanup module!');
            console.log('Beginning cleanup module!');
            MassDelete1();
        } else {
            message.reply('You do not have permission to do that!');
        }
    }
});


//  Message Delete Loop  //

function MassDelete1() {
    if (message.deletable) {
        message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author}`))
            .catch(console.error);
        setImmediate(() => {
                     MassDelete2();
        });
    } else {
        console.log('No further messages to remove!')
    }
}

function MassDelete2() {
    if (message.deletable) {
        message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author}`))
            .catch(console.error);
        setImmediate(() => {
                     MassDelete1();
        });
    } else {
        console.log('No further messages to remove!')
    }
}
