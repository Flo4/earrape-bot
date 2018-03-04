const Command = require('./command')
module.exports = class Help extends Command {

static match(message){
	return message.content.startsWith('!help')
}

static action(message) {
	message.reply('Voici la liste des commandes :\n!play pour jouer une musique\n!earrape pour la jouer avec une meilleure qualité\n!stop pour niquer le bot')
}
}