//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝐄𝐒 𝐓𝐄𝐀𝐌𝐒 𝐕𝟏                                                //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : daisyv1
//  * @author : daisytech
//  * @youtube : https://www.youtube.com/@esteams
//  * @description : dave bot-V1 ,A Multi-functional whatsapp user bot.
//*
//*
//base by Es teams 
//re-upload? recode? copy code? give credit ya :)
//Instagram: null
//Telegram: t.me/examsolutionteam
//GitHub: @paskito002
//WhatsApp: +2349064701860
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@esteams
//   * Created By Github: dave
//   * Credit To dave

//   * © 2024 dave
// ⛥┌┤
// */

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: dave" //ur yt chanel name
global.socialm = "GitHub: paskito002" //ur github or insta name
global.location = "Nigeria, Cross River, Calabar" //ur location

//new
global.botname = ' `dave𝐕𝟏`' //ur bot name
global.ownernumber = ['2349064701860'] //ur owner number, dont add more than one
global.ownername = 'dave 𝗧𝗘𝗖𝗛' //ur owner name
global.websitex = "https://YouTube.com/@esteams"
global.wagc = "https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y"
global.themeemoji = '⛩'
global.wm = "Es Teams Bot Inc."
global.botscript = 'https://github.com/paskito002/ES_TEAMS-V1' //script link
global.packname = "davetech"
global.author = "MΛDΣ BY daveTECH"
global.creator = "2349064701860@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2349064701860"] // Premium User

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['◼️','◽','♥️','♦️','♠️','♻️','🔱','🔰','🌐','Ⓜ️','🌀','🚹','⚧','❣️','❤‍🩹','🩵','🎀','💎','⭐','❄️','🫧']
global.tempatDB = 'database.json'



global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
