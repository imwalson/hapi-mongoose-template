module.exports = {
	debugMode: false,
	server: {
		host: 'localhost',
		address : '0.0.0.0',
		port: 8080,
	},
	mongoDB: {
		url: "mongodb://127.0.0.1:27017/",
		dbName: "hapiMongooseDemo" 
	},
	uploadFolder: './uploads/'
};