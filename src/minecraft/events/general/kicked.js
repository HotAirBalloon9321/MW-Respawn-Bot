module.exports = async (reason, loggedIn) => {
	return logWarn(`Kicked from server, loggedIn: ${loggedIn}`, reason);
}