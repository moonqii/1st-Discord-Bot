module.exports = {
    name: 'ping',
    execute(discord, message) {
    return message.channel.send(`${message.author}, pong fucker!`)    
    }
}