#!/usr/bin/env node

const os = require("os")
const ip = os.networkInterfaces().en0[1].address
const options = process.argv.slice(2)
if (options[0] === '-v' || options[0] === '--version') {
    console.log('v1.0.1·')
} else if (options[0] === '-h' || options[0] === '--help') {
    console.log('use: ip')
} else {
    console.log(`your ip is: ${ip}`)
}