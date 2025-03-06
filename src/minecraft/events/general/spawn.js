require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

let teleportInterval;

module.exports = () => {
	// Clear any existing interval if the bot respawns
	if (teleportInterval) {
		clearInterval(teleportInterval);
	}

	logInfo(`✅ Bot has spawned! - Ensure to check if this is following a respawn/death event. Bot logged in as ${minecraftBot.player.displayName}`);

	minecraftBot.chat(`/tp ${process.env.TP_TO_USERNAME}`);
	
	// Start a new teleportation interval
	teleportInterval = setInterval(() => {
		minecraftBot.chat(`/tp ${process.env.TP_TO_USERNAME}`);
		logInfo(`⏳ Teleporting to ${process.env.TP_TO_USERNAME}`);
	}, 5000); // 5 seconds in milliseconds
}
