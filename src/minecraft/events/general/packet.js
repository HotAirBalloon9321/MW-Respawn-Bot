// YO META MENTIONED
module.exports = (packet, meta) => {
	if (!["map", "keep_alive"].includes(meta.name)) {
		// Ignore frequent packets
		console.log(`📦 Packet received: ${meta.name}`, packet);
	}
}