const Command = require('./command')
module.exports = class Stop extends Command {

static match(message){
	return message.content.startsWith('!stop')
}

static action(message) {
	let salon = message.member.voiceChannel

	if( salon.connection == null) {
		message.reply("Je suis meme pas la frero")
}
	else {
		salon.connection.disconnect()
	}
}
}