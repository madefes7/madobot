const Discord = require("discord.js");
const Buttons = require("discord-buttons");
const Generator = require("generate-password");
const { registerFont, createCanvas } = require("canvas");

exports.run = function(client, message, args) {
  
  var passwords = Generator.generateMultiple(3, {
    length: 6,
    numbers: true
  });

  let pass1 = passwords[0];
  let pass2 = passwords[1];
  let pass3 = passwords[2];

  const width = 400;
  const height = 125;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillRect(0, 0, width, height);
  context.textAlign = "center";
  context.fillStyle = "#fff";
  context.font = "bold 60pt helvetica";
  context.fillText(pass1, 200, 90);
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "captcha.png");

  let button1 = new Buttons.MessageButton().setStyle("blurple").setLabel(pass1).setID(pass1);
  let button2 = new Buttons.MessageButton().setStyle("blurple").setLabel(pass2).setID(pass2);
  let button3 = new Buttons.MessageButton().setStyle("blurple").setLabel(pass3).setID(pass3);

  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setTitle(`Kod ile aynı olan butonu seçin.`)
  .setDescription(`Aşağıdaki kod ile eşleşen butonu seçmeniz bekleniyor, bu işlem 60 saniye sonrasında iptal edilecektir.`)
  .attachFiles(attachment).setImage("attachment://captcha.png").setColor("BLURPLE");

  let correctButton = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setTitle(`Doğru buton seçildi!`)
  .setDescription(`Doğrulama Aşamasını geçmeyi başardınız tebrikler!!!`).setColor("GREEN");

  let incorrectButton = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setTitle(`Yanlış buton seçildi.`)
  .setDescription(`Doğrulama aşamasını geçemediniz tekrar denemek isteyebilirsiniz.`).setColor("RED");

  message.channel.send({
      embed: embed,
      buttons: [button1, button2, button3].sort(() => Math.random() - 0.5)
    }).then(msg => {
    
      let filter = button => button.clicker.id === message.author.id;
      let collector = msg.createButtonCollector(filter);

      collector.on("collect", btn => {
        msg.delete()
        if (btn.id == pass1) {
          message.channel.send(correctButton);

          //Doğru Buton Seçilince Yapılacak İşlemler
          
        } else {
          message.channel.send(incorrectButton);

          //Yanlış Buton Seçilince Yapılacak İşlemler
          
        }

        btn.reply.defer();
      });
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "verify",
  description: "description",
  usage: "usage"
};