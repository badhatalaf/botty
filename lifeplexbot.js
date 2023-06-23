const mineflayer = require('mineflayer')
const botCode = (bot) => {
    bot.once('spawn', () => {
        console.log(bot.username + ' is on!!')
        bot.chat('Hiya!')
    })
}

const connectBot = (username) => {
    const bot = mineflayer.createBot({
        host: 'lifeplex.aternos.me',
        port: 63256,
        username: username,
        version: '1.19.1'
    })

    bot.once('end', () => {
        console.log(`Bot ${username} has been disconnected. Reconnecting in 5 seconds...`)
        setTimeout(() => connectBot(username), 5000)
    })

    botCode(bot)
}

connectBot('botty')
