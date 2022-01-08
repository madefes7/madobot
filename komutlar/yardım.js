const Discord = require('discord.js');
require('discord-reply')
exports.run = async (client, message, args) => { 
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true, format : "png"}))
.setTitle(`[] --> İsteğe Bağlı | <> --> Zorunlu | () --> Zorunlu Değil`)
.setDescription(`${client.user.username} Yardım Menüsü! - Bay İlbeycik`)
.addField(`!afk <sebep>`, `AFK Kalırsınız`, true)
.addField(`!yavaşmod <süre>`, `Kanala Yavaşmod Ekler ( Slowmode )`, true)
.addField(`!kullanıcı bilgi [@etiket]`, `Sizin Veya Bir Kullanıcının Kullanıcı Bilgisini Gösterir`, true)
.addField(`!otorol`, `Otorol Logunu Ve Rolünü Ayarlarsınız Kullanıcı Sunucuya Girdiğinde Otomatik Rol Verir`)
.addField(`!kick`, `Bir Kullanıcıyı Kickler`, true)
.addField(`!ban-yetkili`, `Ban Yetkilisini Ayarlarsınız Ban Atabilecek Rol`, true)
.addField(`!ban-log`, `Banlog Ayarlarsınız`, true)
.addField(`!ban`, `Belirlenen Kullanıcıya BAN Atar`, true)
.setColor(`RANDOM`)
.setFooter(`Bay İlbeycik - Botclub.net`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
message.lineReply(embed)
};

//permissions and aliases

exports.conf = {
  enabled: true,
  aliases: ['help'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: '',
  examples: ''
};