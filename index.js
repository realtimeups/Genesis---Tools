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
    if(command === 'among'){
        if(!args.length){
            return message.channel.send("```md\n# Err \n#Usage: !!among <room code>\n```")
        }
        if(args.length){
            (await message.guild.channels.create(`Code: ${args[0]}`)).userLimit(10).setParent("779437695590989824");

            const channel = message.guild.channels.get("779439251241959475")
            channel.send(`@everyone \nGame Ba Code ${args[0]} Shoro Shod Dus Dashtid Berid Play Bedid<a:A9:683287687427391497>`)
        }
    }
	    if(command === 'rules'){
	message.delete
        if(!args.length){
            return message.channel.send("```md \n #Usage : !!rules <colorhex> <image>\n```")
        }
        if(args.length){
        const rules = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}`+"`s Rules")
        .setColor(`${args[0]}`)
        .setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }))
        .setImage(args[1])
            .addField("**<a:gif_15:721654708917370910>) Be Respectful**", "ادب رو تا حد امکان رعایت کنید" , false)
            .addField("**<a:gif_15:721654708917370910>) Don't Discriminate**", "از هر گونه تبعیض دوری کنید", false)
            .addField("**<a:gif_15:721654708917370910>) No Information Leaking**", "اطلاعات یا تصاویر شخصی افراد رو پخش نکنید", false)
            .addField("**<a:gif_15:721654708917370910>) No Harassment**", "از آزار و اذیت افراد بپرهیزید", false)
            .addField("**<a:gif_15:721654708917370910>) No Advertisement**", "هیچگونه تبلیغی از طریق این سرور مجاز نیست.", false)
            .addField("**<a:gif_15:721654708917370910>) Use The Proper Channels**", "پست و پیام هاتون رو در کانال های مربوط بهشون بفرستید", false)
            .addField("**<a:gif_15:721654708917370910>) No NSFW Content**", "پخش هرگونه محتوای مستهجن ممنوع هست", false)
            .addField("**<a:gif_15:721654708917370910>) Listen to the Admins**", "به حرف ادمین های سرور گوش بدید", false)
		.setFooter(message.guild.name, message.guild.iconURL({ size: 2048, dynamic: true }))
            message.channel.send(rules)
        }

    }
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
	    .addField("`" + `🔰${prefix}meme` + "`", "**For Get funny memes**")
	    .addField("`" + `🔰${prefix}among <roomcode>` + "`", "**For Create Channel And Announe To Other Players**")
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
function gregorian_to_ghamari(year, month, day) {
    if (year > 1582 || (year == 1581 && month > 9 && day > 14)) {
        int1 = parseInt((month - 14) / 12);
        jd = parseInt((1461 * (year + 4800 + int1)) / 4) + parseInt((367 * (month - 2 - (12 * (int1)))) / 12) - parseInt((3 * (parseInt((year + 4900 + int1) / 100))) / 4) + day - 32075;
    } else {
        jd = (367 * year) - parseInt((7 * (year + 5001 + parseInt((month - 9) / 7))) / 4) + parseInt((275 * month) / 9) + day + 1729777;
    }
    l = jd - 1948440 + 10632;
    n = parseInt((l - 1) / 10631);
    l = l - 10631 * n + 354;
    j = ((parseInt((10985 - l) / 5316)) * (parseInt((50 * l) / 17719))) + ((parseInt(l / 5670)) * (parseInt((43 * l) / 15238)));
    l = l - (parseInt((30 - j) / 15)) * (parseInt((17719 * j) / 50)) - (parseInt(j / 16)) * (parseInt((15238 * j) / 43)) + 29;
    month = parseInt((24 * l) / 709);
    day = l - parseInt((709 * month) / 24);
    year = (30 * n) + j - 30;
    return [year, month, day];
}

function ghamari_to_gregorian(year, month, day) {
    jd = parseInt(((11 * year) + 3) / 30) + (354 * year) + (30 * month) - parseInt((month - 1) / 2) + day + 1948440 - 385;
    if (jd > 2299160) {
        l = jd + 68569;
        n = parseInt((4 * l) / 146097);
        l = l - parseInt((146097 * n + 3) / 4);
        i = parseInt((4000 * (l + 1)) / 1461001);
        l = l - parseInt((1461 * i) / 4) + 31;
        j = parseInt((80 * l) / 2447);
        day = l - parseInt((2447 * j) / 80);
        l = parseInt(j / 11);
        month = j + 2 - (12 * l);
        year = (100 * (n - 49)) + i + l;
    } else {
        j = jd + 1402;
        k = parseInt((j - 1) / 1461);
        l = j - (1461 * k);
        n = parseInt((l - 1) / 365) - parseInt(l / 1461);
        i = l - (365 * n) + 30;
        j = parseInt((80 * i) / 2447);
        day = i - parseInt((2447 * j) / 80);
        i = parseInt(j / 11);
        month = j + 2 - (12 * i);
        year = (4 * k) + n + i - 4716;
    }
    return [year, month, day];
}






function gregorian_to_jalali(gy, gm, gd) {
    var g_d_m, jy, jm, jd, gy2, days;
    g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    gy2 = (gm > 2) ? (gy + 1) : gy;
    days = 355666 + (365 * gy) + parseInt((gy2 + 3) / 4) - parseInt((gy2 + 99) / 100) + parseInt((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
    jy = -1595 + (33 * parseInt(days / 12053));
    days %= 12053;
    jy += 4 * parseInt(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += parseInt((days - 1) / 365);
        days = (days - 1) % 365;
    }
    if (days < 186) {
        jm = 1 + parseInt(days / 31);
        jd = 1 + (days % 31);
    } else {
        jm = 7 + parseInt((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
    }
    return [jy, jm, jd];
}

function jalali_to_gregorian(jy, jm, jd) {
    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days = -355668 + (365 * jy) + (parseInt(jy / 33) * 8) + parseInt(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
    gy = 400 * parseInt(days / 146097);
    days %= 146097;
    if (days > 36524) {
        gy += 100 * parseInt(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
    }
    gy += 4 * parseInt(days / 1461);
    days %= 1461;
    if (days > 365) {
        gy += parseInt((days - 1) / 365);
        days = (days - 1) % 365;
    }
    gd = days + 1;
    sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
    return [gy, gm, gd];
}
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
cron.schedule('5 * * * * *', function() {

        let myGuild = client.guilds.cache.get('680395962446774292');
        let memberCount = "🔥┇All Members: " + myGuild.memberCount;
	client.channels.cache.get("777941730443526186").setName(memberCount, "Members Channel");
	console.log(`Changing Members Channels`);
});
cron.schedule('5 * * * * *', function() {

        let myGuild = client.guilds.cache.get('687359247784345607');
        let memberCount = "☢┇No Fear: " + myGuild.memberCount;
	client.channels.cache.get("777955436292734995").setName(memberCount, "Members Channel");
	console.log(`Changing Members Channels`);
});
cron.schedule('5 * * * * *', function() {
        let myGuild = client.guilds.cache.get('680395962446774292');
        let memberCount = "💠┇Genessis: " + myGuild.memberCount;
	client.channels.cache.get("779432947056902185").setName(memberCount, "Members Channel");
	console.log(`Changing Members Channels`);
});
client.login(process.env.token);



