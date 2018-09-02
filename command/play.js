
const Command = require('./command')
const YoutubeStream = require('ytdl-core')
const YouTube = require("discord-youtube-api");
const youtube = new YouTube("AIzaSyD05LSefMZhfdzrqs8qTo7NeuIfntD3Vfg");
const streamOptions = { seek: 0, volume: 1, quality: "highest" }
var queue = [];
module.exports = class Play extends Command {

static match(message){
	return message.content.startsWith('!play')
}

static action(message) {
	message.reply("tu rajoutes de la merde dans la queue");
  	let args = message.content.split(' ')
    queue.push(args[1]); 
  console.log(queue[0]);

  
  /*
  async function getInfo(videoLink){
    var mdr = await youtube.getVideo(videoLink);
    //console.log(mdr);
    return await mdr;

}
*/
  function getInfo(videoLink){
    var video = youtube.getVideo(videoLink);
    return video;
  }
  
  var infos = getInfo(queue.slice(-1)[0]);
  
  infos.then(video => {
    const title = video.title;
    const duration = video.durationSeconds;
    const complexDuration = video.duration;
    const id = video.id;
    const description = video.description;
    console.log(description);
});
  
  
  if(queue[1]==null){
    play();
  }
  
  function play(){
  	let salon = message.member.voiceChannel
		if(!salon){
			message.reply("T'es pas dans le salon")
		}
		else{

	salon
		.join()
		.then(function (connection){
			let stream = YoutubeStream(queue[0])

			stream.on('error', function(){
				message.reply("C'est quoi ce lien de merde ??")
        if(queue[0]==null){
					connection.disconnect()
        }
        else{
          play();
        }
			})
			connection
				.playStream(stream, streamOptions)
				.on('end', function (){
              queue.shift();
        if(queue[0]==null){
					connection.disconnect()
        }
        else{
          play();
        }
        })
			})
	}
  }
	}
}
