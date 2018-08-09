
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
   if (message.content === "нет"){
    message.reply("да");
          };
           });
client.on('message', message => {
     if (message.content === "да"||'Да'||'Дыа'{
    message.reply("нет");
     };
     });
 client.on('message', message => {
     if (message.content === 'я не тупая') {
    	message.reply('нет ты тупая');
   	};
});
 client.on('message', message => {
     if(message.content === "#Иринагей"){
      setInterval(function() {
          let answers = ["иринагей", "ирина тупая", "ирина сосет", "ирина фрик"]; 
          let rand = Math.floor(Math.random()*answers.length); 
        message.channel.send(answers[rand]);
           }, 10000) ;
         };    
     setTimeout(function() {
        clearInterval(any);
        }, 50000);
    });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

