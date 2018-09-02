const Discord = require('discord.js')
const bot = new Discord.Client()
var queue = [];
const earrape = require('./command/earrape')
const stop = require('./command/stop')
const play = require('./command/play')
const help = require('./command/help')
const queue2 = require('./command/queue')
var express = require("express");
var app = express();

app.get('/', function(req, res){ res.send('The robot is happily running.'); });
app.listen(process.env.PORT || 5000);

var ptdr ="lol";

const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


bot.login(process.env.BOT_TOKEN)

bot.on('ready', function () {
  console.log("Je suis connecté !")
  bot.user.setActivity('MARIO KART')
})

bot.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong !')
  }
})


bot.on('message', message => {
  var mdr = message.content
  for(var i=0;i<5;i++){
  mdr = mdr.toLowerCase().replace('?', '');
    mdr = mdr.toLowerCase().replace(',', '');
    mdr = mdr.toLowerCase().replace('!', '');
    mdr = mdr.toLowerCase().replace('.', '');
    mdr = mdr.toLowerCase().replace(/ /g, '');
    mdr = mdr.toLowerCase().replace('§', '');
    mdr = mdr.toLowerCase().replace(';', '');
    mdr = mdr.toLowerCase().replace('/', '');
    mdr = mdr.toLowerCase().replace(':', '');
    
  }
  

if (mdr.endsWith("quoi")){
    message.reply('feur');
}
else if (mdr.endsWith("koi")){
    message.reply('feur');
}
  else if (mdr.endsWith("oiq")){
    message.reply('feur');
}
})





bot.on('message', message => {
  var mdr = message.content
  for(var i=0;i<5;i++){
  mdr = mdr.toLowerCase().replace('?', '');
    mdr = mdr.toLowerCase().replace(',', '');
    mdr = mdr.toLowerCase().replace('!', '');
    mdr = mdr.toLowerCase().replace('.', '');
    mdr = mdr.toLowerCase().replace(/ /g, '');
    mdr = mdr.toLowerCase().replace('§', '');
    mdr = mdr.toLowerCase().replace(';', '');
    mdr = mdr.toLowerCase().replace('/', '');
    mdr = mdr.toLowerCase().replace(':', '');
    
  }
if (mdr.endsWith("qui")){
    message.reply('quette');
}
else if (mdr.endsWith("ki")){
  message.reply('quette');
}
})


bot.on('message', message => {
  var mdr = message.content
  for(var i=0;i<5;i++){
  mdr = mdr.toLowerCase().replace('?', '');
    mdr = mdr.toLowerCase().replace(',', '');
    mdr = mdr.toLowerCase().replace('!', '');
    mdr = mdr.toLowerCase().replace('.', '');
    mdr = mdr.toLowerCase().replace(/ /g, '');
    mdr = mdr.toLowerCase().replace('§', '');
    mdr = mdr.toLowerCase().replace(';', '');
    mdr = mdr.toLowerCase().replace('/', '');
    mdr = mdr.toLowerCase().replace(':', '');
    
  }
if (mdr.endsWith("comment" || "komment" || "komant" || "koment")){
    message.reply('40');
}
})


bot.on('message', message => {
   var user = message.author;
    if (user.username === 'GUIKERTRUCHE'){
        message.reply('wesh pk tu parles christian ?')
    }
})

bot.on('message', function (message) {
    let commandUsed = earrape.parse(message) || stop.parse(message) || play.parse(message) || help.parse(message) || queue2.parse(message)
})
//var temps = setInterval(fonctionDab, 1500000)

/*function fonctionDab(){
bot.channels.find("name","dab").send("Je dab")
}
*/
var temps2 = setInterval(fonctionNulle, 15000)

function fonctionNulle(){
  var nulle = "C'est nul"
 }

