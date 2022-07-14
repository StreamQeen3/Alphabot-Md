const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia & english
//You can request others language 
global.language = english  //change indonesia to english if you don't understand the language used by the bot


// Other
global.botname = "𝙼𝚒𝚜𝚜 𝚀𝚎𝚎𝚗 𝚆𝙰_𝚋𝚘𝚝" //namabot kalian
global.ownername= "💆‍♂️𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿_𝚋𝚘𝚝_24/7💆‍♂️" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "🅣🅗🅐🅝🅚🅢 🅕🅞🅡 🅤🅢🅘🅝🅖 🅜🅔" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "🅣🅗🅐🅝🅚🅢🅕🅞🅡🅤🅢🅘🅝🅖🅜🅔@gmail.com" //bebas
global.region = "SRI LANKA" //bebas
global.timezone = 'SRI JAYAWARDANAPURA' //  timezone wib
global.owner = ["94762511600"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "94762511600" // nomor wa kalian
global.ownernomerr = "+94762511600" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://i.pinimg.com/originals/d0/5a/f9/d05af9f29bdc165d849080a69632c209.jpg" // maks size 30kb, agar welcome image nya tdk delay

global.packname = '© 𝙼𝚒𝚜𝚜 𝚀𝚎𝚎𝚗 𝚆𝙰_𝚋𝚘𝚝' //sticker wm ubah
global.author = '💆‍♂️𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿𝚋𝚘𝚝24/7💆‍' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
