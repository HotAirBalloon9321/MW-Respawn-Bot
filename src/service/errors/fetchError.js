class FetchError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

class FetchUuidError extends Error {
	constructor() {
		super("error in FetchUuidError");
	}
}

module.exports = {
	FetchUuidError
}