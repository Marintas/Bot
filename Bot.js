
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
   if (message.content === 'нет'){
    message.reply('да');
          };
           
  if (message.content === 'да'){
    message.reply('нет');
          };
   if(message.content === "STOP"){
      setInterval(function() {
          let answers = ["Stop stop stop stop stop","STOP STOP STOP STOP STOP"];
          let rand = Math.floor(Math.random()*answers.length); 
        message.channel.send(answers[rand]);
           }, 1000); 

                    };                  

});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

