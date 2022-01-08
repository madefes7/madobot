const Discord = require('discord.js')
exports.run = async (client, message, args) => { 
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`Bu Komutu Kullanmak İçin **KICK_MEMBER** Yetkisine Sahip Olmalısın! - Bay İlbeycik`) && message.react('❌')

    let kişi = message.mentions.users.first();
    if (!kişi) return message.channel.send("Kicklemem için birini etiketle!") && message.react('❌')

    let sebep = args.slice(1).join(' ');
    if (!sebep) return message.channel.send("Bir Sebep Gir!") && message.react('❌')

  kişi.send(new Discord.MessageEmbed()
  .setTitle(`Yeni Bir **Kick** Bildirim\'i Var!`)
  .setDescription(`**${message.guild.name}** Adlı Sunucudan **${sebep}** Sebebiyle Kicklendiniz!`)
  .setColor('RANDOM')
  .setFooter(`Bay İlbeycik - Botclub.net`)
  .setTimestamp()
  )

   const bayilbeycik = new Discord.MessageEmbed()
   .setTitle("Başarılı")
   .setDescription(`${kişi} adlı kişi **${sebep}** sebebiyle başarıyla 
  kicklendi.`)
   message.channel.send(bayilbeycik)
   message.guild.members.kick(kişi);
};

//permissions and aliases

exports.conf = {
  enabled: true,
  aliases: ['at'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'kick',
  description: '',
  usage: '',
  examples: ''
};