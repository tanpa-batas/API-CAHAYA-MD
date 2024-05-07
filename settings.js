const fs = require('fs')

global.creator = '👑 API OFFICIAL 👑'// yourname
global.MONGO_DB_URI = "mongodb+srv://kgfaps:P9QLdX9Wpbj6WWH4@cluster0.ojm0jfd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "100000000aaaaaaajajsjsjjsjs" //isi apa aja bebas
global.your_email = "kgfaps@gmail.com" //email
global.email_password = "idispbrhgbyhlcib" //application password email
global.limitCount = 1000
global.YUOR_PORT = 3000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
