module.exports = {
    name: "fucker",
    execute(discord, message){
        const embed = new discord.MessageEmbed()
        .setAuthor(`All about Moonqii`, `https://cdn.discordapp.com/attachments/866383457143881811/883239682547286026/ali_a_sloth.jpg`, `https://linktr.ee/moonqii`)
        .setTitle(`Myself`)
        .setURL(`https://cdn.discordapp.com/attachments/866383457143881811/883240197649756200/logan_being_retarded.png`)
        .addFields(
            { name: 'fuck', value: 'you', inline: true }
        )
        .setColor(`#f003fc`)
        .setImage(`https://cdn.discordapp.com/attachments/866383457143881811/883240845531291668/funny.jpg`)
        // .setThumbnail(``)
        .setDescription(`I am Myself and I am Awesome my name is Nathan and I like don't like Pizza and well i do but I don't prefer it sometimes but I do like lasanga too but I do like yeah`)
        .setFooter(`Moonqii Bot dot com`)
        .setTimestamp();

            return message.channel.send({ content: "fuck you", embeds: [embed] })
    }
}