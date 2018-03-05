const Discord = require('discord.js')
const bot = new Discord.Client()
const earrape = require('./command/earrape')
const stop = require('./command/stop')
const play = require('./command/play')
const help = require('./command/help')

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
    user = message.author;
    if (user.username === 'GUIKERTRUCHE'){
        message.reply('wesh pk tu parles christian ?')
    }
})

bot.on('message', function (message) {
    let commandUsed = earrape.parse(message) || stop.parse(message) || play.parse(message) || help.parse(message)
})
var temps = setInterval(fonctionDab, 250000)

function fonctionDab(){
bot.channels.find("name","dab").send("Je dab")
}
