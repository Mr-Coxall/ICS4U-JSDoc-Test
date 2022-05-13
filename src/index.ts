/**
 * Log function.
 * @constructor
 * @param {string} message - The message.
 */
function log(someMessage: string) {
    console.log(someMessage)

    return 1
}

let message: string = 'Hello, World!'
let returnValue = log(message)
console.log("\nDone.")
