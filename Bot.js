
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
   if (message.content === "нет"){
    message.reply("да");
          };
           });
client.on('message', message => {
     if (message.content=="да"){
    message.reply("нет");
     };
     });
 client.on('message', message => {
     if (message.content === 'ping') {
    	message.reply('pong');
   	};
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

