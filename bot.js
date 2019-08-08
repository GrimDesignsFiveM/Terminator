   //      Spam Bot      \\
// Created By The Watchers \\

// Settings \\

const BotName = "ツ Spam Bot ツ"; // Bot Name \\
const Token = "NTg1NTQ3MDg4NjA4MzYyNTE3.XPbWGw.47heiUnPVT-ogeOkfYHgAT4bln8"; // The token for the bot \\
const SpamMessage = "ツ The Watchers ツ Are The Best Devs Around :smiley:"; // message you want to spam \\
const YourDiscordID = 444609097233465347; // Replace 0 with your discord id! \\

// Bot \\

const Discord = require("discord.js");
const prefix = ";";

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
            1000
        );
    };
	
	if(command === `${prefix}shutdown`) {
	if (message.author.id !== "444609097233465347") return message.reply('You do not have the permission to use this command!');

  message.channel.send('Are you sure you want to shut me down?\n\nReply with \`cancel\` to **abort** the shutdown. The shutdown will self-abort in 30 seconds.');
  return message.channel.awaitMessages(m => m.author.id === message.author.id, {
    'errors': ['time'],
    'max': 1,
    time: 30000
  }).then(resp => {
    if (!resp) return;
    resp = resp.array()[0];
    let validAnswers = ['yes', 'y', 'no', 'n', 'cancel'];
    if (validAnswers.includes(resp.content)) {
      if (resp.content === 'cancel' || resp.content === 'no' || resp.content === 'n') {
        return message.channel.send('**Shutdown Aborted.**');
      } else if (resp.content === 'yes' || resp.content === 'y') {
        message.channel.send("Goodbye :wave:")
        bot.destroy().then(() => { 
          process.exit();
        }).catch(console.error);
      }
    } else {
      message.channel.send(`Only \`${validAnswers.join('`, `')}\` are valid, please supply one of those.`).catch(()=>console.error);
    }
  }).catch(() => {
    console.error;
    message.channel.send('Shutdown timed out.');
  });
};

  if(command === `${prefix}reload`) {
  if (message.author.id !== '444609097233465347') return message.reply('You do not have the permission to use this command!');
  let command;
  if (bot.commands.has(args[0])) {
    command = args[0];
  } else if (bot.aliases.has(args[0])) {
    command = bot.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`I cannot find the command: ${args[0]}`);
  } else {
    message.channel.send(`Reloading: ${command}`)
      .then(m => {
        bot.reload(command)
          .then(() => {
            m.edit(`Successfully reloaded: ${command}`);
          })
          .catch(e => {
            m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

});

bot.login(Token);
