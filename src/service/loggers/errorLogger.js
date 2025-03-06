const { createLogger, transports, format } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

/**
* Logger instance for error logging.
* Configured to log errors to both a rotated file and the console.
* The log format includes timestamps, stack trace, and JSON formatting.
* 
* @type {import('winston').Logger}
*/
const logger = createLogger({
	level: "error",
	format: format.combine(
		format.timestamp(),
		format.errors({ stack: true }),
		format.json()
	),
	transports: [
		// Daily rotation for error logs
		new DailyRotateFile({
			filename: "logs/error-%DATE%.log", // Logs will be saved in a logs/ folder, with the date appended to the filename
			datePattern: "YYYY-MM-DD", // Daily rotation
			zippedArchive: true, // Optionally compress old log files
			maxSize: "20m", // Maximum size of each log file before rotating
			maxFiles: "14d", // Keep logs for the last 14 days
		}),
		new transports.Console(), // Log to console for development/debugging
	],
});

/**
* Logs an error message along with the stack trace and optional additional context.
* 
* @param {Error} error The error object to log, including message and stack.
* @param {Object} [context={}] Optional additional context-specific information to log with the error.
* @param {string} [context.someContextData] Example of extra contextual information you might want to log.
* 
* @returns {void}
*/

global.logError = (errorOrMessage, context = {}) => {
	if (typeof errorOrMessage === 'string') {
		// Handle string message
		logger.error({
			message: errorOrMessage,
			...(context.error ? { 
				errorMessage: context.error.message,
				stack: context.error.stack 
			} : {}),
			...context
		});
	} else {
		// Handle Error object
		logger.error({
			message: errorOrMessage.message,
			stack: errorOrMessage.stack,
			...context
		});
	}
};
// module.exports = { logError };