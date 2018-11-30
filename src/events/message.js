module.exports = async (client, message) => {
    if (message.author.bot || !message.guild) return;

    let PREFIX = client.config.bot_prefix;
    let prefix = PREFIX.toLowerCase();
    let msg = message.content.toLowerCase();
    
    if (msg.startsWith(prefix)) {
        try {
        require('../handler/command')(client, message);
        } catch(e) {
            if (client.config.error_logging == 'console') {
                return console.error(e)
            } else if (client.config.error_logging == 'markdown') {
                console.error(e)
                return message.channel.send(`an error occured \`\`\`${e.stack}\`\`\``);
            }
        }
    } 
    if (msg == `<@${client.user.id}>` || msg == `<@!${client.user.id}>`) {
        message.channel.send(`:wave: | Hai ${message.author}, prefix ku di server ini adalah \`${prefix}\``);
    }
}
