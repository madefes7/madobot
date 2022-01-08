const Discord = require('discord.js');
const db = require('megadb');
let server = new db.crearDB('server');
exports.run = async (client, message, args) => { 
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Bu Komutu Kullanmak İçin **MANAGE_ROLES** Yetkisine Sahip Olmalısın! - Bay İlbeycik`) && message.react('❌')
    let banyetkili = message.mentions.roles.first();
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
        .setDescription(`Eğer Ban Yetkilisinin Sıfırlanmasını Onaylıyorsanız ✅ Emojisine Tıklayın`)
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
                  `İşlem Başarıyla Onaylandı, Ban Yetkilisi Sıfırlandı!`
              );
    
              server.delete(`banyetkilisi_${message.guild.id}`, logkanal.id)
              message.react('✅')
                }  
            })
        })
       
    }
    
    if (args[0] === "ayarla" || args[0] === "aç") {
        //let banyetkili = message.mentions.users.first();

        if (!banyetkili) return message.channel.send("Bir Ban Yetkili Rolü Belirt! - Bay İlbeycik") && message.react('❌')

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
    .setDescription(`Eğer Ban Yetkili ${banyetkili} Rolünün Ayarlanmasını Onaylıyorsanız ✅ Emojisine Tıklayın`)
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
              `İşlem Başarıyla Onaylandı, Ban Yetkili ${banyetkili} Olarak Belirtildi`
          );

          server.set(`banyetkilisi_${message.guild.id}`, banyetkili.id)
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
  aliases: ['ban-yetkilisi', 'banyetkili', 'yasakla-yetkili'],
  permLevel: '0'
};

exports.help = {
  name: 'ban-yetkili',
  description: '',
  usage: '',
  examples: ''
};