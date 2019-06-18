 //      Discord Spam Bot      \\
// Created By: DontTweetThis \\

// Settings \\

const BotName = "Yeet Boys"; // Bot Name \\
const Token = process.env.TOKEN; // The token for the bot \\
const SpamMessage = " @everyone Get Spammed Bitch!!!"; // message you want to spam \\
const YourDiscordID = "444609097233465347"; // Replace 0 with your discord id! \\

// Bot \\

const Discord = require("discord.js");
const PREFIX = ";"

var prefix = ";"
var token = process.env.BOT_TOKEN;

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    bot.user.setGame("Spamming These Hoes", "https://twitch.tv/")

    console.log(`${BotName} Loaded!`);

    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e);
    };
});

bot.on("message", async message => {
    if(message.author.bot) return;
 const args = message.content.slice(prefix).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}spam`) {
        if(!message.author.id === YourDiscordID) return;
        let Ping = message.mentions.users.first();
        setInterval(function(){
            message.channel.send(SpamMessage)
        },
            1200
        );
    };
});

bot.login(process.env.TOKEN);
