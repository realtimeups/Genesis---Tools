const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('node-cron');
const moment = require('moment');
const pm = require('pretty-ms');
const chalk = require('chalk');
const randomPuppy = require('random-puppy');
const Gamedig = require('gamedig');
const prefix = process.env.prefix;
client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('LOADING', { type: 'WATCHING' });
  setInterval(function() {
          let myGuild = client.guilds.cache.get('680395962446774292');
    let memberCount = myGuild.memberCount;
   client.user.setActivity(`Use ${prefix}help`, { type: 'WATCHING' });
   client.user.setActivity(`💥Members:${memberCount}`, { type: 'WATCHING' });
}, 5000)
});
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === 'meme') {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]

        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

        message.channel.startTyping();

        randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
        }).catch(err => console.error(err));

    };
    if (command === 'start') {

const Loading = new Discord.MessageEmbed()
.addField('Loading...')
.setColor('ff0000')
.setAuthor('LOADING')
message.channel.send(Loading)
.then((message) => {
  setInterval(function() {
                const owner = client.users.cache.get(process.env.owner);
        const { guild } = message
        const { name, region, memberCount, roles, channels, emojis, ownerID, verificationLevel, premiumSubscriptionCount, premiumTier, voiceStates } = guild
        const icon = guild.iconURL({ size: 2048, dynamic: true })
        const banner = guild.bannerURL({ size: 2048, dynamic: true })
    message.edit(new Discord.MessageEmbed().setTitle(`${name}`).setThumbnail(icon).setColor("00FFFF").addField("🌏Server Region:", `${region}`, true).addField("🌐Server Members:", `${memberCount}`, true).addField("<a:gif_10:708752903913078944> Server Roles", `${roles.cache.size}`, true).addField("<a:gif_38:757930271571050496> Server Emojis", `${emojis.cache.size}`, true).addField("📣 Server Channels", `${channels.cache.size}`, true).addField("<a:gif_8:683287662366425138> Server Voices", `${voiceStates.cache.size}`, true).addField("<a:boost:765944412856385567>Server Boosts", `${premiumSubscriptionCount}`, true).addField("<a:boost:765944412856385567>Server Boost Level", `${premiumTier}`, true).addField("👑 Server Owner", `<@${ownerID}>`, true).setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`).setImage(banner))
 }, 5000)})
    }


    if (command === 'news') {
        message.react('✅')
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("شما دسترسی لازم برای استفاده این دستور را ندارید :x:");
        }
        if (!args.length) {
            return message.channel.send("**لطفا ایدی چنل خود را مشخص کنید:x:**");
        }
        if (!args[1]) {
            return message.channel.send("**لطفا پیام خود را مشخص کنید:x:**");
        }
        if (args[0]) {
            return client.channels.cache.get(args[0]).send(`||@everyone||` + ` ${args[1]}`)
        }

    }
    if (command === 'kick') {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("شما دسترسی اخراح کردن ندارید <a:738016054651125770:740118761192947755> ");

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member

          .kick()

          .then(() => {

            const kick = new Discord.MessageEmbed()

           .setDescription(`${user.tag} اخراح شد <a:724267373766508554:740118782055546890>  `)

            message.channel.send(kick);

          })

          .catch(err => {

            

            const kick_err_1 = new Discord.MessageEmbed()

           .setColor('#ff0000')

          .setDescription("نمیتوان این کاربر را اخراج کرد <a:738016054651125770:740118761192947755> ")

            message.channel.send(kick_err_1);

            console.error(err);

          });

      } else {

        

        const kick_err_2 = new Discord.MessageEmbed()

       .setColor('#ff0000')

      .setDescription("این کاربر در این سرور نیست! <a:738016054651125770:740118761192947755> ")

        message.channel.send(kick_err_2);

      }

    } else {

      message.reply("یک کاربر برای اخراج کردن مینشن کنید <a:738016054651125770:740118761192947755> ");

    }

  


    }
    if (command === 'avatar') {
        message.react('✅')
        let embed = new Discord.MessageEmbed();
        if (!message.mentions.users.size) {
            embed.setTitle('Your avatar');
            embed.setDescription(`Links:\n[png](${message.author.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${message.author.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${message.author.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${message.author.displayAvatarURL({format: "webp", size: 2048})})`);
            embed.setColor(0x00008b);
            embed.setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048, dynamic:true})}`);
            embed.setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }));
            message.channel.send(embed);
        } else {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const user = message.mentions.users.first();
            embed.setTitle(`‹${user.username}›'s avatar`);
            embed.setDescription(`Links:\n[png](${user.displayAvatarURL({format: "png", size: 2048})}) | [jpg](${user.displayAvatarURL({format: "jpg", size: 2048})}) | [gif](${user.displayAvatarURL({format: "gif", size: 2048, dynamic: true})}) | [webp](${user.displayAvatarURL({format: "webp", size: 2048})})`);
            embed.setColor(0x8b0000);
            embed.setTimestamp();
            embed.setFooter(`Requsted By : ${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048, dynamic:true})}`);
            embed.setImage(client.users.cache.get(user.id).displayAvatarURL({ size: 2048, dynamic: true }));
            message.channel.send(embed);
        }
    }
    if (command === 'info') {
        message.react('✅')
        if (!message.mentions.users.size) {
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const c = message.author.createdAt
            const owner = client.users.cache.get(process.env.owner);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const Accinfo = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setThumbnail(message.author.displayAvatarURL({ size: 2048, dynamic: true }))
                .addField("🕒 Account Age :", "`" + `${c.getDate()}/${months[c.getMonth()]}/${c.getFullYear()}  ${c.getHours()}:${c.getMinutes()}` + "`", false)
                .addField("🆔 Client Id :", `${message.author.id}`, true)
                .addField("💦 Avatar :", `[Click Here To Open](${message.author.displayAvatarURL({size: 2048, dynamic:true})})`, true)
                .setFooter(` ${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048, dynamic:true})}`)
            message.channel.send(Accinfo);
        } else {
            const taggedUser = message.mentions.users.first();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const c = taggedUser.createdAt
            const owner = client.users.cache.get(process.env.owner);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const Accinfo = new Discord.MessageEmbed()
                .setColor(randomColor)
                .setThumbnail(taggedUser.displayAvatarURL({ size: 2048, dynamic: true }))
                .addField("🕒 Account Age :", "`" + `${c.getDate()}/${months[c.getMonth()]}/${c.getFullYear()}  ${c.getHours()}:${c.getMinutes()}` + "`", false)
                .addField("🆔 Client Id :", `${taggedUser.id}`, true)
                .addField("💦 Avatar :", `[Click Here To Open](${taggedUser.displayAvatarURL({size: 2048, dynamic:true})})`, true)
                .setFooter(` ${taggedUser.tag}`, `${taggedUser.displayAvatarURL({size: 2048, dynamic:true})}`)
            message.channel.send(Accinfo);
        }
    }


    if (command === 'help') {
        if(!args[0]){
        message.react('✅')
        const owner = client.users.cache.get(process.env.owner);
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const help = new Discord.MessageEmbed()
            .setTitle("Command List")
            .setColor(randomColor)
            .addField("`" + `🔰${prefix}info` + "`", "**For Get Your Account Info**")
            .addField("`" + `🔰${prefix}ping` + "`", "**For Get Ping**")
            .addField("`" + `🔰${prefix}server` + "`", "**For Get Server info**")
            .addField("`" + `🔰${prefix}avatar` + "`", "**For Get User Avatar**")
            .addField("`" + `🔰${prefix}help music` + "`", "**For Get Music Help**")
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
        message.channel.send(help);
        }
        if(args[0] === 'music'){
            const owner = client.users.cache.get(process.env.owner);
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            const embed = new Discord.MessageEmbed()
            .setTitle("Music Command List")
            .setColor(randomColor)

            .addField("`🔰!!nowplaying`", "~ To show the music which is currently playing in this server")
            .addField("`🔰!!pause `", "~ To pause the current music in the server")
            .addField("`🔰!!play <song_name>`", "~ To play songs :D")
            .addField("`🔰!!queue `", "~ To show the server songs queue")
            .addField("`🔰!!resume `", " ~ To resume the paused music")
            .addField("`🔰!!skip `", "~ To skip the current music")
            .addField("`🔰!!stop `", " ~ To stop the music and clearing the queue")
            .addField("`🔰!!volume [volume]`", "~ To change the server song queue volume")
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
            message.channel.send(embed)
        }
    }
    if (command === 'ping') {
        message.react('✅')
        const owner = client.users.cache.get(process.env.owner);
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const ping = Date.now() - message.createdTimestamp;
        const pingm = new Discord.MessageEmbed()
            .setTitle("**Server Ping**")
            .setColor(randomColor)
            .setDescription(`\n\nThe server ping is${ping}ms <a:gif_7:683287629340737548>`)
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
            .setThumbnail("https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-1/254000/37-512.png")
        message.channel.send(pingm);
    }
    if (command === 'server') {
        message.react('✅')
        const owner = client.users.cache.get(process.env.owner);
        const { guild } = message
        const { name, region, memberCount, roles, channels, emojis, ownerID, verificationLevel, premiumSubscriptionCount, premiumTier, voiceStates } = guild
        const icon = guild.iconURL({ size: 2048, dynamic: true })
        const banner = guild.bannerURL({ size: 2048, dynamic: true })


        if(!guild.bannerURL()){
        const nobanner = 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg'
        const server = new Discord.MessageEmbed()
            .setTitle(`${name}`)
            .setThumbnail(icon)
            .setColor("00FFFF")
            .addField("🌏Server Region:", `${region}`, true)
            .addField("🌐Server Members:", `${memberCount}`, true)
            .addField("<a:gif_10:708752903913078944> Server Roles", `${roles.cache.size}`, true)
            .addField("<a:gif_38:757930271571050496> Server Emojis", `${emojis.cache.size}`, true)
            .addField("📣 Server Channels", `${channels.cache.size}`, true)
            .addField("<a:gif_8:683287662366425138> Server Voices", `${voiceStates.cache.size}`, true)
            .addField("<a:boost:765944412856385567>Server Boosts", `${premiumSubscriptionCount}`, true)
            .addField("<a:boost:765944412856385567>Server Boost Level", `${premiumTier}`, true)
            .addField("👑 Server Owner", `<@${ownerID}>`, true)
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
            .setImage(nobanner)
            message.channel.send(server);
}
else{
            const banner = guild.bannerURL({ size: 2048, dynamic: true })
            const server = new Discord.MessageEmbed()
            .setTitle(`${name}`)
            .setThumbnail(icon)
            .setColor("00FFFF")
            .addField("🌏Server Region:", `${region}`, true)
            .addField("🌐Server Members:", `${memberCount}`, true)
            .addField("<a:gif_10:708752903913078944> Server Roles", `${roles.cache.size}`, true)
            .addField("<a:gif_38:757930271571050496> Server Emojis", `${emojis.cache.size}`, true)
            .addField("📣 Server Channels", `${channels.cache.size}`, true)
            .addField("<a:gif_8:683287662366425138> Server Voices", `${voiceStates.cache.size}`, true)
            .addField("<a:boost:765944412856385567>Server Boosts", `${premiumSubscriptionCount}`, true)
            .addField("<a:boost:765944412856385567>Server Boost Level", `${premiumTier}`, true)
            .addField("👑 Server Owner", `<@${ownerID}>`, true)
            .setFooter(`Codded By ${owner.tag}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
            .setImage(banner)
            message.channel.send(server);
}
        

    }
    if (command === 'log') {
        message.react('✅')
        const { guild } = message
        console.log(guild)
    }
});
client.on('guildMemberAdd', member => {
    const owner = client.users.cache.get(process.env.owner);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const channel = client.channels.cache.get(process.env.join);
    // Do nothing if the channel wasn't found on this server

    const embed = new Discord.MessageEmbed()
        .setColor(randomColor)
        .setThumbnail(member.user.displayAvatarURL({ size: 2048, dynamic: true }))
        .setAuthor(`User Joined The Server`)
        .setDescription(`Wlcome: ${member}`)
        .setFooter(`Codded By ${owner.tag}`);
    channel.send(embed);
});

client.on('guildMemberRemove', member => {
    const owner = client.users.cache.get(process.env.owner);
    // Send the message to a designated channel on a server:
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const channel = client.channels.cache.get(process.env.left);
    // Do nothing if the channel wasn't found on this server

    const embed = new Discord.MessageEmbed()
        .setColor(randomColor)
        .setThumbnail(member.user.displayAvatarURL({ size: 2048, dynamic: true }))
        .setAuthor(`User Left The Server`)
        .setDescription(`Bye: ${member}`)
        .setFooter(`Codded By ${owner.tag}`);
    channel.send(embed);
});
client.on('messageDelete', async message => {
    // ignore direct messages
    if (!message.guild) return;

    const fetchedLogs = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE'
    });

    let entry = fetchedLogs.entries.first();

    const owner = client.users.cache.get(process.env.owner);
    const Log = new Discord.MessageEmbed()

    .setColor('#ff5100')
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({size: 2048})}`)
        .setFooter(`DeVeloPeD By ${owner.username}`, `${owner.displayAvatarURL({size: 2048, dynamic:true})}`)
        .setDescription(`🗑 **Message** Sent By <@${message.author.id}> \n** Deleted ** in ${message.channel} by ${entry.executor}`)
        .addField("💈 Message Content :", "`" + `${message.content}` + "`", false);

    return client.channels.cache.get(process.env.del).send(Log);


});
client.on("message", (message) => {
  if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("discord.gg")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
    if (message.content.includes("/invite")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
});
cron.schedule('5 * * * * *', function () {
    var currentdate = new Date();
    var datetime = "📆『" + currentdate.getDate() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getFullYear() + "』"
    client.channels.cache.get("777846233699057694").setName(datetime, "daily date change");
    console.log(`Changing Date EN To ${datetime}!`);
});
cron.schedule('5 * * * * *', function () {
    ndt = new Date();
    var g_y = ndt.getFullYear();
    var g_m = ndt.getMonth() + 1;
    var g_d = ndt.getDate();
    var shamsi = gregorian_to_jalali(g_y, g_m, g_d);
    var dateir = "📆『" + shamsi[0] + '/' + shamsi[1] + '/' + shamsi[2] + '』';
    client.channels.cache.get("777846219640799242").setName(dateir);
    console.log(`Changing Date IR To ${dateir}!`);
});
cron.schedule('5 * * * * *', function () {
    ndt = new Date();
    var g_y = ndt.getFullYear();
    var g_m = ndt.getMonth() + 1;
    var g_d = ndt.getDate();
    var ghamari = gregorian_to_ghamari(g_y, g_m, g_d);
    var dateAR = "📆『" + ghamari[0] + '/' + ghamari[1] + '/' + ghamari[2] + '』';
    client.channels.cache.get("777846249621291038").setName(dateAR);
    console.log(`Changing Date AR To ${dateAR}!`);
});
client.login(process.env.token);


