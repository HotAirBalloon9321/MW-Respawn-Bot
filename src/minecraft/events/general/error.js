module.exports = async (err) => {
	logError("Runtime Error - Minecraft Error Event", err);
	throw err;
}