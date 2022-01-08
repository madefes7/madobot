const Discord = require('discord.js')
const db = require('megadb')
require('discord-reply')
const server = new db.crearDB('server')
const ayarlar = require("../ayarlar.json");
 
exports.run = async (client, message, args) => { 
    let prefix = ayarlar.prefix 

if(!args[0]){
  let yukleniyor = new Discord.MessageEmbed()
  .setTitle(`<a:loading:848892773070667776> Only Bot Yardım Menüsü <a:loading:848892773070667776> `)
  .setDescription(`<:yukleniyor:848894170507902976> Tüm Yardım Menüleri Çekiliyor Lütfen Bekleyiniz. <:yukleniyor:848894170507902976>`)
  .setFooter(`Only ∞ Guzzy Bot!`, client.user.avatarURL())
  .setTimestamp() 
  message.lineReply(yukleniyor).then(msg => {
    setTimeout(() => msg.edit(yardım), 3000)
  })
  const yardım = new Discord.MessageEmbed()
.setTitle(`<:guzzy_info:878728044116848701> Only Bot Yardım Menüsü <:guzzy_info:878728044116848701> `)
.addField(`<a:ayar:755762932993884310> Only'nin Yetkili Komutları İçin,`, `${prefix}yardım yetkili`, true)
.addField(`<a:eglencepikachu:755764415571165214> Only'nin Birbirinden Eğlenceli Eğlence Komutlarını Görmek İçin,`, `${prefix}yardım eğlence`, true)
.addField(`<:guzzy_note:878742219799007273> Only'nin Sesli Komutları İçin,`, `${prefix}yardım sesli`, true)

.addField(`Only yi Ekle!`, `**[Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958719)**`, true)
.setColor(`RANDOM`)
.setThumbnail(client.user.avatarURL())
.setImage('https://cdn.discordapp.com/attachments/852799023936045056/882358301445218325/standard_4.gif')

//.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setFooter(`Only Bot! | Gücümüze Güç Katacağız!`)
//message.channel.send(yardım)
/*const yardım = new Discord.MessageEmbed()
  .setTitle(`Guzzy Yardım Menüsü`)
  .setDescription(`**Guzzy Komutları \n<a:ayar:755762932993884310> ${prefix}yardım yetkili   \`Guzzy Yetkili Komutlarını Gösterir Hata Yoktur Hata Olursa ${prefix}hatabilir hata\` \n<a:eglencepikachu:755764415571165214> ${prefix}yardım eğlence \`Guzzy Eğlence Komutlarını Gösterir V1'dir\` \n<a:Hype:771661833031385118> ${prefix}yardım kullanıcı \`Guzzy Kullanıcı Komutlarıdır V1\` \n<a:Developer:771661832532000769> ${prefix}yardım premium \`Premium Komutları Gösterir.\` \n<a:ayar:755762932993884310> ${prefix}yardım koruma  \`Koruma Komutlarını Gösterir\` \n<a:ayar:755762932993884310> ${prefix}sponsor  \`Sponsoru Gösterir\` \n<a:dbl:762943467176329217> ${prefix}yardım botlist \` Botlist Sistemini Gösterir\` \n<:bot:816364819912327168> ${prefix}yardım otorol \` Otorol Sistemini Gösterir\`**`) 
.setImage(client.user.avatarURL())
.setThumbnail()
.setTimestamp()
.setFooter()
.addField(`Guzzy yi Ekle!`, `**[Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=724973113032441918&scope=bot&permissions=2146958719)**`, true)
  message.channel.send(yardım)
  */
}
 const menu = args[0]
//Eğlence  YARDIM
if(menu =="eglence" || menu=="eğlence"){
  let yukleniyor = new Discord.MessageEmbed()
  .setTitle(`<a:loading:848892773070667776> Only Bot Eğlence Yardım Menüsü <a:loading:848892773070667776> `)
  .setDescription(`<:yukleniyor:848894170507902976> Tüm Eğlence Komutları Çekiliyor Lütfen Bekleyiniz. <:yukleniyor:848894170507902976>`)
  .setFooter(`Only Bot!`, client.user.avatarURL())
  .setTimestamp() 
  message.lineReply(yukleniyor).then(msg => {
    setTimeout(() => msg.edit(yardımeglence), 3000)
  })
const yardımeglence = new Discord.MessageEmbed()
  .setTitle(`<:guzzy_info:878728044116848701> Only Eğlence Yardım Menüsü`)
  .setDescription(`
> **» .aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» .balık-tut :** Denizde balık tutarsınız.
> **» .beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» .efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» .ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» .espri :** Bot sizin için espri yapar.
> **» .türk :** Türk gif atar.
> **» .hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» .kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» .kaç-cm :** Bot malafat uzunluğunuzu söyler.
> **» .kralol :** Kral olmanıza yarar.
> **» .tokat-at :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» .avatar :** Etiketlediğiniz kişinin avatarını bulursun.
> **» .öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» .şekerye :** Bot size şeker ikram eder.
> **» .aşkölçer :**Aşkınızı ölçer**
> **» **.doğrulukcesaret** : Doğruluk mu ? Cesaret mi ?
  `)
  .addField(`Only yi Ekle!`, `**[Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958719)**`, true)
  .setThumbnail(client.user.avatarURL())
.setImage('https://cdn.discordapp.com/attachments/852799023936045056/882358301445218325/standard_4.gif')

  //message.channel.send(yardımeglence)
}

if(menu =="moderasyon" || menu=="yetkili"){
  let yukleniyor = new Discord.MessageEmbed()
  .setTitle(`<a:loading:848892773070667776> Only Bot Yetkili Yardım Menüsü <a:loading:848892773070667776> `)
  .setDescription(`<:yukleniyor:848894170507902976> Tüm Yetkili Komutları Çekiliyor Lütfen Bekleyiniz. <:yukleniyor:848894170507902976>`)
  .setFooter(`Only Bot!`, client.user.avatarURL())
  .setTimestamp() 
  message.lineReply(yukleniyor).then(msg => {
    setTimeout(() => msg.edit(yardımyetkili), 5000)
  })
  const yardımyetkili = new Discord.MessageEmbed()  
.setTitle(`<:guzzy_info:878728044116848701> Only Yetkili Yardım Menüsü`)
.setDescription(`

> » **.ban** : Etiketlediğiniz kişiyi sunucudan yasaklar.
> » **.unban** : Etiketlediğiniz kişinin yasağını kaldırır.
> » **.kick** : Etiketlediğiniz kişiyi sunucudan atar.
> » **.jail**: Etiketlediğiniz kişiyi hapislersiniz.
> » **.nuke** : Komutu kullandığınız kanalı siler tekrar açar.
> » **.emojiekle**: Bot emoji ekler.
> » **.sil**: Mesaj siler.
> » **.mute** : Etiketlediğiniz kişiyi susturur (bakımda).
> » **.sohbet aç/kapat** : Sohbeti kapatır/açar.
> » **.isimdeğiştir** : Etiketlediğiniz kişinin ismini değiştirir.
> » **.çevir** :V11 kodu V12'ye çevirir.
> » **.sa-as-sistemi aç/kapat** Sa yazdığında cevap verir.
> »**.yavaşmod** : Yazma limitini ayarlar.
> » **.yetkilerim** : Yetkilerini gösterir.

`)
.addField(`Only yi Ekle!`, `**[Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958719)**`, true)
.setThumbnail(client.user.avatarURL())
.setImage('https://cdn.discordapp.com/attachments/852799023936045056/882358301445218325/standard_4.gif')

 // message.channel.send(yardımyetkili)
}
if(menu =="ses" || menu=="sesli"){
    let yukleniyor = new Discord.MessageEmbed()
    .setTitle(`<a:loading:848892773070667776> Only Bot Sesli Yardım Menüsü <a:loading:848892773070667776> `)
    .setDescription(`<:yukleniyor:848894170507902976> Tüm Sesli Komutları Çekiliyor Lütfen Bekleyiniz. <:yukleniyor:848894170507902976>`)
    .setFooter(`Only Bot!`, client.user.avatarURL())
    .setTimestamp() 
    message.lineReply(yukleniyor).then(msg => {
      setTimeout(() => msg.edit(yardımsesli), 2000)
    })
    const yardımsesli = new Discord.MessageEmbed()  
  .setTitle(`<:guzzy_info:878728044116848701> Only Sesli Yardım Menüsü`)
  .setDescription(`
  
  > **» .git :** Başka bir ses kanalındaki kullanıcıya gider.
  > **» .çek :** Başka ses kanalındaki kullanıcıyı yanına çeker.
  > **» .mute :**Sesli Kanalında Mute Atar.
  `)
  .addField(`Only yi Ekle!`, `**[Eklemek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958719)**`, true)
  .setThumbnail(client.user.avatarURL())
  .setImage('https://cdn.discordapp.com/attachments/852799023936045056/882358301445218325/standard_4.gif')
  
   // message.channel.send(yardımyetkili)
  }


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Yardım', 'menü', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};