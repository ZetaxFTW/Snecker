// import token from the .env file using dotenv
require('dotenv').config();
const TOKEN = process.env.TOKEN;

//import discord.js
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');

// login to discord
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


//send an image to the channel
client.on('messageCreate', message => {
    if (message.content === '!nudes') {
        message.channel.send('Da, du perversling');
        message.channel.send({ files: ['https://www.pngplay.com/wp-content/uploads/1/Madagascar-Penguins-PNG-Transparent-File.png'] });
    }
});

//remove all messages containing "forza", ignore the case
client.on('messageCreate', message => {
    if (message.content.toLowerCase().includes('forza')) {
        message.delete();
        message.channel.send('Du kleiner kek');
    }
});

client.on('messageCreate', message => {
    if (message.content.toLowerCase().includes('forzer')) {
        message.delete();
        message.channel.send('Du kleiner kek');
    }
});

//if a member gets banned
client.on('guildBanAdd', (guild, user) => {
    //send a message to the channel
    guild.channels.cache.get('941756413674418186').send('<@' + user.id + '> wurde gebannt.');
});



client.on('messageCreate', message => {
    if (message.content.toLowerCase().includes('boss') && !message.author.bot) {
        setTimeout(() => {
            message.channel.send('Du bist kein Boss' + ' <@' + message.author.id + '>');
        }, 500);
        //remove the message the bot sent after 3 seconds
        setTimeout(() => {
            message.delete();
        }, 3000);
    }
});

client.on('ready', () => {
    client.user.setActivity('Valorant', { type: 'PLAYING' });
});

client.login(TOKEN);