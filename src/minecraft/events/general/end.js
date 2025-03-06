const { createBotMineflayer } = require("../../minecraftClient.js");

module.exports = async (reason) => {
	logInfo("Disconnect", reason);

	// Recreate the bot when disconnected - shall update this to exponential backoff someday
	// will also add a server online check someday
	setTimeout(() => {
		global.minecraftBot = createBotMineflayer()
	}, 15000);
}