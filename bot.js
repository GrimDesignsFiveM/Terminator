   //      Spam Bot      \\
// Created By The Watchers \\

// Settings \\

const BotName = "ツ Spam Bot ツ"; // Bot Name \\
const Token = process.env.BOT_TOKEN // Replace with "(`tokenhere`) if self hosting
const SpamMessage = "ツ The Watchers ツ Are The Best Devs Around :smiling_imp:"; // message you want to spam \\
const YourDiscordID = 444609097233465347; // Replace 0 with your discord id! \\

// Bot \\

const Discord = require("discord.js");
const prefix = ";";

const bot = new Discord.Client({disableEveryone: true});

const activities_list = [
    "With the ;help command.", 
    "With knives!",
    "Server destruction", 
    "Don't hate me"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.


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
	    
    let sEmbed = new Discord.RichEmbed()
   .setTitle("Get Spammed Hoe :joy: :joy: :joy: ")
    .setColor("#0x3dfbff")
   .setDescription(SpamMessage)
    
  const guild = bot.guilds.get(message.guild.id).id;
    
    let sEmbed4 = new Discord.RichEmbed()
   .setTitle("Get Spammed Hoe :joy: :joy: :joy: ")
    .setColor("#0x3dfbff")
   .setDescription(`Your server ${message.guild.name} is being spammed by ツ Spam Bot ツ a custom spam bot made by [ツ The Watchers Bot Devsツ](https://discord.gg/k689m4K) :smiling_imp:`)
	    
        if(!message.author.id === YourDiscordID) return;
        let Ping = message.mentions.users.first();
	 message.delete().catch();	
        setInterval(function(){
            message.channel.send(sEmbed)
            message.guild.owner.send(sEmbed4)
        },
	     900
        );
    };
	
	if(command === `${prefix}stop`) {
	message.delete().catch();	
	let sEmbed2 = new Discord.RichEmbed()
   .setTitle("How To Stop The Spam :speak_no_evil:")
    .setColor("#0x3dfbff")
   .setDescription('Are you sure you want to shut me down?\n\nReply with \`cancel\` to **abort** the shutdown. The shutdown will self-abort in 60 seconds.')
   .addField("How To Stop The Bot", "Reply with ``yes``, ``y`` for Yes or ``no``, ``n`` for No")  
	
	let sEmbed3 = new Discord.RichEmbed()
   .setTitle("How To Stop The Spam :speak_no_evil:")
    .setColor("#0x3dfbff")
   .setDescription(`<@${message.author.id}>` + " Reply with ``yes`` or ``no`` if you need more help check your DMs The shutdown will self-abort in ``60 seconds.``")
   
   
  message.channel.send(sEmbed3)
 message.author.send(sEmbed2);
  return message.channel.awaitMessages(m => m.author.id === message.author.id, {
    'errors': ['time'],
    'max': 1,
    time: 60000
  }).then(resp => {
    if (!resp) return;
    resp = resp.array()[0];
    let validAnswers = ['yes', 'y', 'no', 'n', 'cancel'];
    if (validAnswers.includes(resp.content)) {
      if (resp.content === 'cancel' || resp.content === 'no' || resp.content === 'n') {
        return message.channel.send('**Shutdown Aborted.**');
      } else if (resp.content === 'yes' || resp.content === 'y') {
        message.channel.send("Goodbye :wave:")
        message.delete().catch();	
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
  message.delete().catch();	
  });
};
	
if(command === `${prefix}help`) {
  message.delete().catch();	 
   let hEmbed = new Discord.RichEmbed()
   .setTitle("Bot Help & Info")
   .setDescription(`<@${message.author.id}>` + "Below is a list of my commands and their usage.")
   .setColor("#0x3dfbff")
   .addField("Help Command :information_source:", "``;help`` Shows this help message")
   .addField("Let It Begin :see_no_evil:", "``;spam`` **STARTS SPAMMING THESE HOES**")
   .addField("Stop The Madness :speak_no_evil:", "``;stop`` **STOPS THE BOTS MESSAGES**")
   .addField("Support Server", "[Join Our Server](https://discordapp.com/invite/gde8qb")
   message.channel.send(hEmbed)
 }


});

bot.login(process.env.BOT_TOKEN);
