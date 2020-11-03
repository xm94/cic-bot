const axios = require('axios');
const lc = require('./lc.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const data = fs.readFileSync('lc.json',{encoding:'utf8', flag:'r'});
const prefix = '!';
console.log(lc[1])
const len = Object.keys(lc).length/2;
const terms ={
    "linux":'I\'d just like to interject for a moment. What you\'re referring to as Linux, is in fact, GNU/Linux, or as I\'ve recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called "Linux", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine\'s resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called "Linux" distributions are really distributions of GNU/Linux.'
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    console.log(message.content);
    if (terms[message.content]) {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(terms[message.content]);
        console.log("in sent")
    }
    if (message.content.toLowerCase().includes('linux')&&!message.author.bot&&!(message.content.toLowerCase().includes('gnu'))&&!(message.content.toLowerCase().includes('gnu/linux'))&&!(message.content.toLowerCase().includes('gnu+linux'))){
        return message.channel.send(terms["linux"]);
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.startsWith(prefix)){
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        if (command === 'lc') {
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
            console.log(Number(args[0]));
            console.log(Number(args[0]));
            if (args[0]== 'random'){
                if (args.length>1){
                    console.log(args[1]);
                    if (args[1].toLowerCase() =="easy"){
                        console.log("in easy")
                        var easy = false;
                        var paid = true;
                        while(easy!='Easy'||paid){
                            console.log('looping easy');
                            var ind=0;
                            while(!ind){
                                ind = Math.floor(Math.random() * Math.floor(len));
                            }
                            easy = lc[ind].difficulty;
                            paid = lc[ind].paid_only;
                        }
                    }
                    if (args[1].toLowerCase() =="medium" || args[1].toLowerCase() =="med"){
                        console.log("in med");
                        var med = false;
                        var paid = true;
                        while(med!='Medium'||paid){
                            console.log('looping medium');
                            var ind=0;
                            while(!ind){
                                ind = Math.floor(Math.random() * Math.floor(len));
                            }
                            med = lc[ind].difficulty;
                            paid = lc[ind].paid_only;
                        }
                    }
                    if (args[1].toLowerCase() =="hard"){
                        console.log("in hard")
                        var hard = false;
                        var paid = true;
                        while(hard!='Hard'||paid){
                            console.log('looping hard');
                            var ind=0;
                            while(!ind){
                                ind = Math.floor(Math.random() * Math.floor(len));
                            }
                            console.log(ind);
                            hard = lc[ind].difficulty;
                            paid = lc[ind].paid_only;
                        }
                    }
                }
                else{
                    var paid = true;
                    while(paid){
                        console.log('looping paid');
                        var ind=0;
                        while(!ind){
                            ind = Math.floor(Math.random() * Math.floor(len));
                        }
                        paid = lc[ind].paid_only;
                    }
                }
            }
            else if(lc[args[0]]){
                console.log("in indice")
                var ind = args[0];
            }
            else{
                return message.channel.send(`That isn't a valid argument, ${message.author}!`);
            }
            //message.channel.send('https://leetcode.com/problems/' + lc[ind].question__title_slug + '/');
            const lcEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(lc[ind].question__title)
                .setURL('https://leetcode.com/problems/'+ lc[ind].question__title_slug + '/')
                .setDescription('LC #' + lc[ind].question_id)
                .addField('Difficulty', lc[ind].difficulty, true)
                .addField('Requires Premium?', lc[ind].paid_only ? 'Yes' : 'No', true)
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png')
                .setTimestamp()
                .setFooter('CIC Bot', 'https://se-infra-imageserver2.azureedge.net/clink/images/01d4668e-3646-4bdd-9cce-7dbac19d6b3bcec5af90-35b0-4b27-957b-60df5426e8d4.png?preset=med-sq');
            message.channel.send(lcEmbed);
        }
    }
});

client.login('');