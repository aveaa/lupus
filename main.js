const Discord = require(`discord.js`);
const client = new Discord.Client();
let p = "!"
//статус бота
client.on('ready', () => {
    client.user.setPresence({ game: { name: `за MoonChat 🌙 | !help`, type: 3 } }).catch();
});
const server_name = 'MonChat 🌙 '
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
      const mutedRole = message.member.guild.roles.find('name', "🚫 Чат Мут") || message.member.guild.roles.find('name', "🚫 Чат Мут");
      if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🚫 Чат Мут`");
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
          } else if(['chunmute','chum'].includes(command)) {
            let user = message.author;
      if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**Вы не модератор**");
      let muted = message.mentions.members.first();
            if(!muted) return message.reply("**Размутить воздух?Ало вы шо ебобо?**");
            const mutedRole = message.member.guild.roles.find('name', "🚫 Чат Мут") || message.member.guild.roles.find('name', "🚫 Чат Мут");
            if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🚫 Чат Мут`");
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
        const mutedRole = message.member.guild.roles.find('name', "🚫 Войс Мут") || message.member.guild.roles.find('name', "🚫 Войс Мут");
        if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🚫 Войс Мут`");
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
              const mutedRole = message.member.guild.roles.find('name', "🚫 Войс Мут") || message.member.guild.roles.find('name', "🚫 Войс Мут");
              if(!mutedRole) return message.reply("**Пожалуйста создайте роль** `🚫 Войс Мут`");
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
      });
