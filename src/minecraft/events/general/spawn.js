require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

let teleportInterval;

module.exports = () => {
	// Clear any existing interval if the bot respawns
	if (teleportInterval) {
		clearInterval(teleportInterval);
	}

	logInfo(`✅ Bot has spawned! - Ensure to check if this is following a respawn/death event. Bot logged in as ${minecraftBot.player.displayName}`);
	logInfo(process.env.MINECRAFT_SERVER_URL);

	minecraftBot.chat(process.env.TP_LOCATION);
	minecraftBot.chat(`/msg ${process.env.MINECRAFT_PLAYER_USERNAME} I am at ${minecraftBot.entity.position}`);
	
	// Start a new teleportation interval
	teleportInterval = setInterval(() => {
		minecraftBot.chat(process.env.TP_LOCATION);
		minecraftBot.chat(`/msg ${process.env.MINECRAFT_PLAYER_USERNAME} I am at ${minecraftBot.entity.position}`);
		logInfo(`⏳ Teleporting to ${process.env.TP_LOCATION}`);
	}, 20000); // 20 seconds in milliseconds
}
