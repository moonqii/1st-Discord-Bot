
module.exports = { 
    name: 'nathan',
    async execute(discord, message, args, fetch) {

        try {
            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?term=nathan`).then(response => response.json())

            console.log(list[0].definition)

            message.channel.send(`${list[0].definition}\n${list[0].author}`)
        }
        catch(err) {
            console.log(err)
        }
    }
}