// this is not global as to prevent carelessly exporting the content

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

module.exports.botAccount = {
	host: process.env.MINECRAFT_SERVER_URL,
	username: process.env.MINECRAFT_BOT_USERNAME,
	// this is the most secure auth method, please try to stick to this - password auth is easily compromisable without control
	auth: "microsoft",
	version: "1.20.4"
}