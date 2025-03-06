require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
module.exports = () => {
	logInfo(`✅ Bot has spawned! - Ensure to check if this is following a respawn/death event. Bot logged in as ${minecraftBot.player.displayName}`);
	minecraftBot.chat(`/tp ${process.env.TP_TO_USERNAME}`);
}