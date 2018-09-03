const Discord = require(`discord.js`);
const client = new Discord.Client();
let p = "!"
let admp = "!!"
//статус бота
client.on('ready', () => {
    client.user.setPresence({ game: { name: `за MoonChat 🌌 | !help`, type: 3 } }).catch();
});
const server_name = 'MoonChat 🌌 '
//ТОКЕН
client.login(process.env.bot_token)

client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.startsWith(p + `help`)) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**Вы не модератор**");
        const embed = new Discord.RichEmbed()
            .setTitle("Команды бота")
            .setColor("#000594")
            .setDescription('🔨 **__Команды для модеров__** \n\n **!chm [user]** `причина` -  замутить кого-то в чатах \n **!chum [user]** - размутить кого-то в чатах \n **!vm [user]** `причина` -  замутить кого-то в войсах \n **!vum [user]** - размутить кого-то в войсах ')
            .setFooter(server_name+"| !help") 
            .setTimestamp();
        message.channel.send({embed});
    }
    if(['chmute','chm'].includes(command)) {
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**Вы не являетесь модератором**");
      let muted = message.mentions.members.first();
      if(!muted) return message.reply("**Замутить воздух?Ало вы шо ебобо?**");
      const mutedRole = message.member.guild.roles.find('name', "🔥 4at Mute Чат Мут") || message.member.guild.roles.find('name', "🔥 4at Mute");
      if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🔥 4at Mute`");
            muted.addRole(mutedRole)
            args.shift();
            args.shift();
            let say = message.content.slice((p + `chmute ${muted}`).length);
            const embed = new Discord.RichEmbed()
            .setTitle("Информация о муте")
            .setColor("#000594")
            .setDescription(`**Пользователь ${muted} получил мут чата** \n\n **Причина: **`+say+`\n\n **Для досрочного размута команда** \n **!chunmute**`)
            .setFooter(server_name+" |!chmute @User")
            .setTimestamp();
            message.channel.send({
                embed
            }).then(function(message) {
                message.react("✅")
            }).catch(function() {});
          } else if(['chunmute','chum'].includes(command)  && (message.author.id === "406343162651738112" || message.author.id === "378915782270124033")) {
            let user = message.author;
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**Вы не модератор**");
      let muted = message.mentions.members.first();
            if(!muted) return message.reply("**Размутить воздух?Ало вы шо ебобо?**");
            const mutedRole = message.member.guild.roles.find('name', "🔥 4at Mute") || message.member.guild.roles.find('name', "🚫 Чат Мут");
            if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🔥 4at Mute`");
            muted.removeRole(mutedRole)
            const embed = new Discord.RichEmbed()
            .setTitle("Информация о размуте")
            .setColor("#000594")
            .setDescription(`**Пользователь ${muted} был размучен** \n\n **Размут дал:** ${user}`)
            .setFooter(server_name+" |!chunmute @User")
            .setTimestamp();
            message.channel.send({
                embed
            }).then(function(message) {
                message.react("✅")
            }).catch(function() {});
      }  
    if(['vmute','vm'].includes(command)) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**Вы не являетесь модератором**");
        let muted = message.mentions.members.first();
        if(!muted) return message.reply("**Замутить воздух?Ало вы шо ебобо?**");
        const mutedRole = message.member.guild.roles.find('name', "🔥 Voise Mute") || message.member.guild.roles.find('name', "🔥 Voise Mute");
        if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🔥 Voise Mute`");
              muted.addRole(mutedRole)
              args.shift();
              args.shift();
              let say = message.content.slice((p + `vmute ${muted}`).length);
              const embed = new Discord.RichEmbed()
              .setTitle("Информация о муте")
              .setColor("#000594")
              .setDescription(`**Пользователь ${muted} получил мут чата** \n\n **Причина: **`+say+`\n\n **Для досрочного размута команда** \n **!vunmute**`)
              .setFooter(server_name+" |!vmute @User")
              .setTimestamp();
              message.channel.send({
                embed
            }).then(function(message) {
                message.react("✅")
            }).catch(function() {});
            } else if(['vunmute','vum'].includes(command)) {
                let user = message.author;
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**Вы не модератор**");
        let muted = message.mentions.members.first();
              if(!muted) return message.reply("**Размутить воздух?Ало вы шо ебобо?**");
              const mutedRole = message.member.guild.roles.find('name', "🔥 Voise Mute") || message.member.guild.roles.find('name', "🔥 Voise Mute");
              if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🔥 Voise Mute`");
              muted.removeRole(mutedRole)
              const embed = new Discord.RichEmbed()
              .setTitle("Информация о размуте")
              .setColor("#000594")
              .setDescription(`**Пользователь ${muted} был размучен** \n\n **Размут дал:** ${user}`)
              .setFooter(server_name+" |!vunmute @User")
              .setTimestamp();
              message.channel.send({
                embed
            }).then(function(message) {
                message.react("✅")
            }).catch(function() {});
        }  
      if (message.content.startsWith(admp + `eval`) && (message.author.id === "406343162651738112")) {
		const code = message.content.split(" ").slice(1).join(" ");
        try {
         let evaled = eval(code);
         if (!code) {
             return message.channel.send("А где код?");
         }
    
         if (typeof evaled !== 'string')
           evaled = require('util').inspect(evaled);
        
           const embed = new Discord.RichEmbed()
           .setTitle(`EVAL ✅`)
       
           .setColor("0x4f351")
           .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
       
         message.channel.send({embed});
       } catch (err) {
         const embed = new Discord.RichEmbed()
         .setTitle(`EVAL ❌`)
  
         .setColor("0xff0202")
         .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(err)}\`\`\``)
    
         message.channel.send({embed});
       }
    }
});