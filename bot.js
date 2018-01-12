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
            console.log('Beginning cleanup module!');
            MassDelete1();
        } else {
            message.reply('You do not have permission to do that!');
        }
    }
});


//  Message Delete Loop  //

function MassDelete1() {
    if channel.fetchMessages({limit: 1}) {
        .then(msg => (message.deletable))
            .then(msg => message.delete(1))
                .then(msg => console.log('Deleted message from ${msg.author}'))
                .catch(console.error);
            setTimeout(() => {
                MassDelete2();
            }, 10);
    } else {
        console.log('Failed to fetch messages! Maybe there are none?')
    }
}
            

function MassDelete2() {
    if channel.fetchMessages({limit: 1}) {
        .then(msg => (message.deletable))
            .then(msg => message.delete(1))
                .then(msg => console.log('Deleted message from ${msg.author}'))
                .catch(console.error);
            setTimeout(() => {
                MassDelete1();
            }, 10);
    } else {
        console.log('Failed to fetch messages! Maybe there are none?')
}
