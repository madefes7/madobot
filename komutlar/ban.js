const Discord = require('discord.js');
const db = require('megadb');
let server = new db.crearDB('server');
exports.run = async (client, message, args) => { 
    let rol = server.get(`banyetkilisi_${message.guild.id}`)
    if (!message.member.roles.cache.has(rol) == message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu Komutu Kullanmak İçin **BAN_MEMBERS** Yetkisine Sahip Olmalısın Veya Ban Yetkili Rolüne Sahip Olmalısın! - Bay İlbeycik`) && message.react('❌')

    let banlog = server.get(`banlog_${message.guild.id}`)

    let kişi = message.mentions.users.first();
    if (!kişi) return message.channel.send("Banlamam için birini etiketle!") && message.react('❌')

    let sebep = args.slice(1).join(' ');
    if (!sebep) return message.channel.send("Bir Sebep Gir!") && message.react('❌')

  kişi.send(new Discord.MessageEmbed()
  .setTitle(`Yeni Bir **Ban** Bildirim\'i Var!`)
  .setDescription(`**${message.guild.name}** Adlı Sunucudan **${sebep}** Sebebiyle Banlandınız!`)
  .setColor('RANDOM')
  .setFooter(`Bay İlbeycik - Botclub.net`)
  .setTimestamp()
  )

   const bayilbeycik = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))

   .setTitle("Başarılı")
   .setDescription(`${kişi} adlı kişi **${sebep}** sebebiyle başarıyla 
   banlandı.`)
   message.channel.send(bayilbeycik)
   message.guild.members.ban(kişi)

   message.guild.channels.cache.get(banlog).send(`<@&${rol}>`, new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
.setDescription(`Yeni Bir Kişi Banlandı!`)   
.addField(`Banlanan Kişi`, `${kişi}`, true)
.addField(`Banlanma Sebebi`, `${sebep}`, true)
.setFooter(`Bay İlbeycik - Botclub.net`)
.setTimestamp()
.setThumbnail(client.user.avatarURL())
   )
};

//permissions and aliases

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yasakla'],
  permLevel: '0'
};

exports.help = {
  name: 'ban',
  description: '',
  usage: '',
  examples: ''
};