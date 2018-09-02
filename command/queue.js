const Discord = require('discord.js')
const bot = new Discord.Client()
const Command = require('./command')
const Play = require('./play');
module.exports = class Queue extends Command {
  
static match(message){
	return message.content.startsWith('!queue')
}

static action(message) {
  var queue = require('./play').var_queue;
  console.log(queue);
  message.reply("contenu de la grosse queue :");
  
  var yolo = Play.queue;
  console.log(yolo);
  
  function tailleQueue(queue){
    return queue.lenght
  }
  
}
  
  
}