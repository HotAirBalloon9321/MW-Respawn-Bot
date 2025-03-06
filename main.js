require("./src/service/loggers/errorLogger.js");
require("./src/service/loggers/logger.js");

// mineflayer
const { createBotMineflayer } = require("./src/minecraft/minecraftClient.js");
global.minecraftBot = createBotMineflayer();