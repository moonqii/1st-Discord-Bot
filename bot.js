const discord = require('discord.js');
const fs = require('fs');
const config = require('config.json');

var prefix = "!"
var token = config.token

const client = new discord.Client({ intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES] })

client.commands = new discord.Collection();
const commands = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commands) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.once("ready", () => {
console.log(`discord bot has started ${client.user.tag}`)    
client.user.setActivity("with Moonqii")
})

client.on("messageCreate", async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        client.commands.get("ping").execute(discord, message)
    } else if(command === "fucker"){
        client.commands.get("fucker").execute(discord, message)
    } else if (command === 'nathan') {
        client.commands.get('nathan').execute(discord, message, args, fetch)
    }
})

client.login(token)





