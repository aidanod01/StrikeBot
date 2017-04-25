const Discord = require("discord.js");
const mybot = new Discord.Client();

const hook = new Discord.WebhookClient('305852955259568138', 'https://discordapp.com/api/webhooks/306278611546013707/gS6uJAhWQW7NgnS4_eR8pJZgJ1RiCyt8rk4gmpzu-ck5yeL6QFnsZyPAeOGSRUMB0I9v');

mybot.login('MzA1ODUyOTU1MjU5NTY4MTM4.C98CJQ.COCs6LQa9PI8WrMY6RogAFlPDeY');

mybot.on('ready', () => {
  console.log('StrikeBot');
  console.log('Version: 1.0.0');
  console.log('Status: Online');
});

var prefix = '!';
 
    myRollResults = {
[1] : ":one:",
[2] : ":two:",
[3] : ":three:",
[4] : ":four:",
[5] : ":five:",
[6] : ":six:"
}

mybot.on("message", (message) => {
    if (message.content === (prefix + "roll")) {
    var roll = Math.floor(Math.random() * 6) + 1
message.reply('**You rolled a**' + ' ' + myRollResults[roll]);
    }
});

    myBallResults = {
[1] : "**It is decidedly so** :slight_smile:",
[2] : "**Very doubtful** :confused:",
[3] : "**Yes, definitely** :smiley:",
[4] : "**Outlook not so good** :confounded:",
[5] : "**Concentrate and ask again** :expressionless:",
[6] : "**Ask again later** :expressionless:",
[7] : "**You may rely on it** :sunglasses:",
[8] : "**My reply is no** :smiling_imp:",
[9] : "**My sources say no** :zipper_mouth:"
}


mybot.on("message", (message) => {
    if (message.content.startsWith(prefix + "8ball")) {
    var ball = Math.floor(Math.random() * 9) + 1
message.reply(myBallResults[ball]);
    }
});

mybot.on("message", (message) => {
    if (message.content === (prefix + "help")) {
        var help1 = '```css\nStrikeBot Version 1.0.0\n```';
        var help2 = '```js\nThings I can do:\n```';
        var help3 = '`!help` - **Shows what I can do**\n`!roll` - **Roll a number between 1-6**\n`!8ball <question>` - **The magical 8 ball will reveal your future**\n`!roast` - **Severely roasts you**';
        message.channel.sendMessage(help1 + help2 + help3);
    }
});

    myRoastResults = {
[1] : "You were only adopted for the free clothes you came with. :shirt:",
[2] : "Why do you want me to roast you? Roasting someone autistic is not nice. :yum:",
[3] : "Your intellectual comprehension of life is the reason yours is a failure. :middle_finger: ",
[4] : "With my calculations, you're a cancerous, cringy, ugly, retarded, weak, annoying, bitchy, little fuck who only plays roblox to earn the attention that you never get in real life, and to follow everyone else to this discord because you'll never be a leader. :zzz:",
[5] : "I'm not here to roast, I'm here to talk about mistakes. If you want to know more, ask your parents. :family_wwb:",
[6] : "I can't roast anyone, I can only compliment. You're such an intelligent, strong, wonderful person. I really hope you take that into consideration. Wait-I'm sorry, I thought we were having a lying competition. :smiling_imp:",
[7] : "My abilities as a discord bot are limited. Your capability as a human isn't, yet the excessive amount of chromosomes you have proves otherwise. :smiley:",
[8] : "You're wasting my time, get out of my channel. I need you to leave now just like your father did to you as a child. :runner:",
[9] : "ERROR 404...command could not be completed due to the lack of brain cells you would be losing if you actually had any. :head_bandage:",
[10] : "Scientists say the universe is made up of neutrons, protons and electrons. I was thinking about you and then remembered how they forgot to mention morons. :nerd:",
[11] : "The fact that you want me to roast you is just as embarrassing as the thought of you being alive right now. :smiley:",
[12] : "I don't have feelings or show any emotions, but truth be told I'm sad for everyone who talks to you. :cry:",
[13] : "I'm a discord bot; nothing more, nothing less. You on the other hand are less. :hand_splayed:",
[14] : "The only thing more annoying than getting asked to roast you is having you still be here. :fire:",
[15] : "You're an uncle fucking boner-biting bastard piece of shit. :poop:",
[16] : "If you were me, your life would be happier. If I were you, I would end mine. :smiley:",
[17] : "Is your ass jealous from the amount of shit that comes out of your mouth? :poop:",
[18] : "Roses are red, violets are blue. If I was human, I'd have five fingers and the third one would be for you. :rose:",
[19] : "You actually bring everyone a lot of happiness-when you leave the room, that is. :runner:",
[20] : "I would call you retarded, but calling you that would be an insult to all autists."
//when adding more add comma to last/most recent roast and make sure to edit the math
}


mybot.on("message", (message) => {
    if (message.content.startsWith(prefix + "roast")) {
    var roast = Math.floor(Math.random() * 20) + 1
message.reply(myRoastResults[roast]);
    }
});

    mybot.on("message", (message) => {
    if (message.content.startsWith(prefix + "webhook")) {
 hook.sendMessage('push me to the edge');
    }
});