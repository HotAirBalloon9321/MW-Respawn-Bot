const { readdirSync } = require("fs");
const minecraftConfig = require("../../config/mineflayer.js");
const mineflayer = require("mineflayer");

// Create and export the function
function createBotMineflayer() {
	// Create the bot 
	const bot = mineflayer.createBot(minecraftConfig.botAccount);

	// Load event handlers
	const eventDirs = readdirSync("./src/minecraft/events/");
	for (const dirs of eventDirs) {
		const perEventFile = readdirSync(`./src/minecraft/events/${dirs}`).filter(file => file.endsWith(".js"));
		for (const file of perEventFile) {
			const event = require(`./events/${dirs}/${file}`);
			logInfo(`${new Date()} [Events Loaded]: ${file} from ${dirs}!`);
			bot.on(file.replace(".js", ""), event.bind(null, bot));
			delete require.cache[require.resolve(`./events/${dirs}/${file}`)];
		}
	}

	return bot;
}

// Export the function
module.exports.createBotMineflayer = createBotMineflayer;