const Discord = require('discord.js')
exports.run = async (client, message, args) => { 
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu Komutu Kullanmak İçin **BAN_MEMBERS** Yetkisine Sahip Olmalısın Veya Ban Yetkili Rolüne Sahip Olmalısın! - Bay İlbeycik`) && message.react('❌')


  let kişi = args[0]
  if(!kişi) {
    message.channel.send(new Discord.MessageEmbed()
  .setTitle("Hatalı!")
  .setDescription(`Lütfen yasağı kaldırılacak kişinin kullanıcı ID’sini giriniz`)
  .setFooter(`${message.author.tag} Tarafından istendi!`)
  .setColor("RED")
    )
  if (isNaN(kişi)) {
    message.channel.send(new Discord.MessageEmbed()
  .setTitle("Hatalı!")
  .setDescription(`Lütfen doğru bir ID Giriniz!`)
  .setColor("RED")
  .setFooter(`${message.author.tag} Tarafından istendi!`)
    )
  const embeed = await message.guild.fetchBans();
  message.guild.members.unban(kişi)  
  if (!kişi.id === embeed) {
    message.channel.send(new Discord.MessageEmbed()
  .setTitle("Hatalı!")
  .setDescription(`Bu kişi zaten yasaklanmış!`)
  .setColor("RED")
  .setFooter(`${message.author.tag} Tarafından istendi!`)
    )
    message.channel.send(new Discord.MessageEmbed()
  .setTitle("Başarılı!")
  .setDescription(`<@!${kişi}> Adlı kullanıcının yasağı başarı bir şekilde kaldırıldı!`)
  .setColor("GREEN")
  .setFooter(`${message.author.tag} Tarafından istendi!`)
    )
  }
  }
  }
};

//permissions and aliases

exports.conf = {
  enabled: true,
  aliases: ['yasak-kaldır'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'unban',
  description: '',
  usage: '',
  examples: ''
};