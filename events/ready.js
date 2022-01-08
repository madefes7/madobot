const moment = require('moment')
module.exports = client => {
client.user.setPresence('Elaine :heart: ile')
  const statusList = [
    { msg: ' Bay İlbeycik\'i ', type: 'WATCHING' },
    
  ]

  setInterval(async () => {
    const bot = Math.floor(Math.random() * statusList.length + 1) - 1
    await client.user.setActivity(statusList[bot].msg, { url: 'https://twitch.tv/bay_ilbeycik',
    type: 'STREAMING' });  {
      type: statusList[bot].type
    }
  }, 4500)
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı Botunuz Sorunsuz bir şekilde çalışıyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şuanda Aktif!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.commands.size} Komut İle Giriş Yapıldı!`);
};
