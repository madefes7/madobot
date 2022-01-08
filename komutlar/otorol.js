const Discord = require('discord.js');
const db = require('megadb');
let server = new db.crearDB('server');
require('discord-reply')
exports.run = async (client, message, args) => { 
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Bu Komutu Kullanmak İçin **MANAGE_ROLES** Yetkisine Sahip Olmalısın! - Bay İlbeycik`) && message.react('❌')
    let otorolrol = message.mentions.roles.first();
    let otorolkanal = message.mentions.channels.first();

    if(!args[0]){
    const yardım = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
     .setDescription(`Yanlış Kullanım!`)
     .setColor('RED')
     .addField(`Seçenekler`, `ayarla/sıfırla`, true)
     message.channel.send(yardım)
    }
    if (args[0] === "sıfırla" || args[0] === "kapat") {
        const sifirlaembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
        .setDescription(`Eğer Otorol Rolünün ${otorol} Ve Otorol Kanalının ${otorolkanal} Sıfırlanmasını Onaylıyorsanız ✅ Emojisine Tıklayın`)
        message.channel.send(sifirlaembed).then(async function(sentEmbed) {
            const emojiArray = ["✅"];
            const filter = (reaction, user) =>
              emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
            await sentEmbed.react(emojiArray[0]).catch(function() {});
            var reactions = sentEmbed.createReactionCollector(filter, {
              time: 30000
            });
            reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
            reactions.on("collect", async function(reaction) {
              if (reaction.emoji.name === "✅") {
                message.channel.send(
                  `İşlem Başarıyla Onaylandı, Otorol Sistemi Sıfırlandı!`
              );
    
              server.delete(`otorolkanal_${message.guild.id}`, otorolk.id)
              server.delete(`otorolrol_${message.guild.id}`, otorolr.id)
              message.react('✅')
                }  
            })
        })
       
    }
    
    if (args[0] === "ayarla" || args[0] === "aç") {
        //let banyetkili = message.mentions.users.first();

        if (!otorolrol) return message.lineReply(new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`!otorol ayarla @rol #kanal`)
        .setFooter(`Bay İlbeycik - Botclub.net`)
        ) && message.react('❌')
        if (!otorolkanal) return message.lineReply(new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`!otorol ayarla @rol #kanal`)
        .setFooter(`Bay İlbeycik - Botclub.net`)
        ) && message.react('❌')

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
    .setDescription(`Eğer Otorol ${otorolrol} Rolünün Ayarlanmasını Ve Otorol Kanal\'ı ${otorolkanal} Olarak Ayarlanmasını Onaylıyorsanız ✅ Emojisine Tıklayın`)
    message.channel.send(embed).then(async function(sentEmbed) {
        const emojiArray = ["✅"];
        const filter = (reaction, user) =>
          emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
        await sentEmbed.react(emojiArray[0]).catch(function() {});
        var reactions = sentEmbed.createReactionCollector(filter, {
          time: 30000
        });
        reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!"));
        reactions.on("collect", async function(reaction) {
          if (reaction.emoji.name === "✅") {
            message.channel.send(
              `İşlem Başarıyla Onaylandı, Otorol Rolü ${otorolrol}  Ve Otorol Kanal\'ı ${otorolkanal} Olarak Belirtildi`
          );

          server.set(`otorolr_${message.guild.id}`, otorolrol.id)
          server.set(`otorolk_${message.guild.id}`, otorolkanal.id)
          message.react('✅')
            }  
        })
    })

}
};

//permissions and aliases

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otomatikrol', 'otomatik-rol'],
  permLevel: '0'
};

exports.help = {
  name: 'otorol',
  description: '',
  usage: '',
  examples: ''
};