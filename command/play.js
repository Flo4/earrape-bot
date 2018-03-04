const Command = require('./command')
const YoutubeStream = require('ytdl-core')
const streamOptions = { seek: 0, volume: 1, quality: "highest" }
module.exports = class Play extends Command {

static match(message){
	return message.content.startsWith('!play')
}

static action(message) {
	let salon = message.member.voiceChannel
		if(!salon){
			message.reply("T'es pas dans le salon")
		}
		else{
	let args = message.content.split(' ')
	salon
		.join()
		.then(function (connection){
			let stream = YoutubeStream(args[1])
			stream.on('error', function(){
				message.reply("C'est quoi ce lien de merde ??")
				connection.disconnect()
			})
			connection
				.playStream(stream, streamOptions)
				.on('end', function (){
					connection.disconnect()
				})
			})
	}
	}
}
