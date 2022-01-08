const Discord = require('discord.js');
const Dogru = "BLACK";
exports.run = async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed: {color: Dogru, description: `Bu komutu kullanacak yetkin bulunmamakta.` }})
let mesajsayisi = args[0]
if(!mesajsayisi) return message.channel.send({embed: {color: Dogru, description: `1 ile 100 arasında sayı girmeyi unuttun.` }})
if(isNaN(mesajsayisi))return message.channel.send({embed: {color: Dogru, description: `Sadece rakam girmelisin.` }})
if (mesajsayisi > 100) return message.channel.send({embed: {color: Dogru, description: `1 ile 100 arasında sayı girmeyi unuttun.` }})
if (mesajsayisi < 1) return message.channel.send({embed: {color: Dogru, description: `1 ile 100 arasında sayı girmeyi unuttun.` }})
try {
await message.channel.bulkDelete(mesajsayisi)
await message.channel.send({embed: {color: Dogru, description: `Başarıyla ${mesajsayisi} mesaj sildim.`}});
} catch(error) {
message.channel.send({embed: {color: Dogru, description: `14 Günden eski mesajları silemem.`}})}
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["sil", "temizle"],
permLevel: 0,
};
exports.help = {
name: 'sil',
description: 'Kanaldaki mesajları siler.',
usage: 'sil'
};