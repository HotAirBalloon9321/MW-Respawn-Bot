const axios = require("axios");
const { FetchUuidError } = require("../errors/fetchError.js");

module.exports.usernameToUuid = async (username) => {
	try {
		const userData = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${username}`, {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json;charset=UTF-8",
			}
		});

		return userData.data.id;
	} catch (error) {
		logError("Error fetching UUID", error);
		throw new FetchUuidError; // for other layers to decipher the error by instanceof
	}
}