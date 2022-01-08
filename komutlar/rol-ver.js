const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let props = require(`./komutlar/${f}`);

let rol = "Verilecek Rol ID" // Kullanıcıya Verilecek Rol ID
let rol2 = "Alınacak Rol ID" // Kullanıcıdan Alınacak Rol ID

message.delete()
message.member.roles.add(rol)
message.member.roles.remove(rol2)
message.member.send(new Discord.MessageEmbed()
.setTitle(`Bay İlbeycik`)
.setDescription(`Selam <@!${message.member.id}>! \n **${message.guild.name}** Adlı Sunucuda **${props.help.name}** Adlı Komutu Kullandığınız İçin <@&${rol}> Adlı Rolünüz Verildi, <@&${rol2}> Adlı Rolünüz Alındı! \n İyi Günler`)
.setFooter(`Bay İlbeycik`)
)
}

exports.conf = {
    enabled: true,
    aliases: ['rol-ver'],
    guildOnly: false,
    permLevel: '0'
  };
  
  exports.help = {
    name: 'rolver', // Kendiniz Rol-al Olarak Düzenleye Bilirsiniz!
    description: 'ÜYELER İÇİN ROLVER KOMUTU / BAY İLBEYCİK',
    usage: 'prefix+rolver',
    examples: 'prefix+rol-ver'
  };