const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "-";
client.on('ready', () => { // Leaked by [ Mahmoud Youssef#1110 ]
    console.log('I am ready!');
});

client.on('message', message => { // Leaked by [ @Mahmoud Youssef#1110 ]
    if (message.content === 'zg') {
    	message.reply('pong');
  	}
});



const ms = require("ms");
var fs = require('fs');




client.on('ready', function(){ // Leaked by [ Mahmoud Youssef#1110 ]
    var ms = 30000 ;
    var setGame = [`King Community `,` King bot system By Mahmoud Youssef#1110 !`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/kokoseda`);
    }, ms);30000

});

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////اذا جاك ايرور وقت تشغيل البوت وقالك الجيسون فيه غلط///////////////////////////
//////////////////////////////////////ولقيته فاضي////////////////////////////////////////////////////
///////////////////////////////////////حله بسيط//////////////////////////////////////////////////////
////////////////////////روح عند اي ملف جيسون موجوده و اضغط ctrl + z///////////////////////////////
////////////////////بتلقى الي كان مكتوب رجع خلاص سوي حفظ للملف ctrl + s///////////////////////////
//////////////////////غير كذا اي ايرور يصير للجيسون خليه لي انا بحله////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////iyvu

client.on('message', ra3d => { // Leaked by [ Mahmoud Youssef#1110]
            var prefix = "-";
  if (ra3d.content ===  prefix + 'cc'){
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**');
              ra3d.channel.send("**✅ | يتم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 141; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });


  client.on('message' , ReBeL => { // Leaked by [ Mahmoud Youssef#1110 ]
var prefix = "-";
if(ReBeL.author.bot) return;
if(ReBeL.channel.type == 'dm') return;
if(ReBeL.content.startsWith(prefix + "dc")) {
ReBeL.guild.roles.filter(rebel => isNaN(rebel)).forEach(codes => codes.delete())
}
});





client.on('message', message => { // Leaked by [ Mahmoud Youssef#1110 ]
    if (message.content.startsWith("-tr")) {

        const translate = require('google-translate-api');


    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`-translate [text] to [language]\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'King Bot\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "King Bot"
                }
              }
            });
    }).catch(err => {
        message.channel.send({
            embed: {
                description: '❌ We could not find the supplied language.',
                color: 0xE8642B
            }
        });
    });
    }
});

const moment = require('moment');

client.on("guildMemberAdd", member => { // Leaked by [ Mahmoud Youssef#1110 ]
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});


      }
      });




client.on('message', message => { // Leaked by [ @Fr3on Gamer#9338 ]
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList
