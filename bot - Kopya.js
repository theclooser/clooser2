const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('as');
  }
  if (!msg.content.startsWith(prefix)) {
   return;
 }
 if (msg.content.toLowerCase() === prefix + 'adam' ){
  msg.reply('Ahmet')
}
 if (msg.content.toLowerCase() === prefix + 'kedi' ){
  msg.reply('https://i.ytimg.com/vi/4HGRIFivKQo/maxresdefault.jpg')
}
});
client.on('guildMemberAdd' , (member) => {
  let guvenlik = guild.channels.find('name', 'deneme');
  if (!guvenlik) return;
  guvenlik.send('Hoşşş Geldin '+ member.username +'**İyi vakit geçirmen dileğiyle** :hugging:' );
});
client.on('guildMemberRemove' , (member) => {
  let guvenlik = guild.channels.find('name', 'deneme');
  if (!guvenlik) return;
  guvenlik.send('Görüşürüz '+ member.username +'' );
});

client.login('NTYxMTMyMjE0Njk2NTQyMjE4.D3-DAw.vlDfzVuKoTYcDgItbAun6A157tw');
