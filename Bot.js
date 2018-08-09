
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
   if (message.content === 'нет'){
    message.reply('да');
          };
           
  if (message.content === 'да'){
    message.reply('нет');
          };
   if(message.content === "#Иринагей"){
      setInterval(function() {
          let answers = ["иринагей", "ирина тупая", "ирина сосет", "ирина фрик"]; 
          let rand = Math.floor(Math.random()*answers.length); 
        message.channel.send(answers[rand]);
           }, 10000) ;
                    };    
     setTimeout(function() {
        clearInterval(timerid);
        }, 50000);
              
    if (message.content === 'я не тупая') {
    	     message.reply('нет ты тупая');
   	              };
    if (message.content === 'Да'){
             message.reply('нет');
          };
    if (message.content === 'Дыа'){
            message.reply('нет');
                  };
    if (message.content === 'дыа'){
          message.reply('нет');
                    };
    if (message.content === 'Нет'){
          message.reply('да');
               };
    if (message.content === 'Неа'){
          message.reply('ага');
               };
     if (message.content === 'ты тупой'){
            message.reply('нет');
                 };
     if (message.content === 'нет ты'){
             message.reply('нет');
             };
     if (message.content === 'Ты тупой'){
           message.reply('нет ты');
                 };
     if (message.content === 'Соси'){
          message.reply('ирина, сама соси');
             };
     if (message.content === 'Отсосали'){
          message.reply('пиздос тупая');
             };
     if (message.content === 'соси'){
           message.reply('ирина, сама соси');
             };
     if (message.content === 'отсосали'){
           message.reply('пиздос тупая');
            };
     if  (message.content === 'ты хуесос'){
            message.reply('хуи тут сосешь только ты');
                };
     if (message.content === 'это факт'){
           message.reply('это не факт');
            };
     if (message.content === 'Это факт'){
          message.reply('это не факт');
          };
     if (message.content === 'Ты хуесос'){
          message.reply('хуи тут сосешь только ты');
          };
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

