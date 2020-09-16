const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
const chalk = require("chalk");
const fs = require("fs");
const ytdl = require("ytdl-core");
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http:${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 604800000);
const log = message => {
  console.log(`${message}`);
};

const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const whisper1 = new Discord.Client();
const whisper2 = new Discord.Client();
const whisper3 = new Discord.Client();
const whisper4 = new Discord.Client();
const whisper5 = new Discord.Client();
const whisper6 = new Discord.Client();
const whisper7 = new Discord.Client();
const whisper8 = new Discord.Client();
const whisper9 = new Discord.Client();
const whisper10 = new Discord.Client();
const whisper11 = new Discord.Client();
const whisper12 = new Discord.Client();
const whisper13 = new Discord.Client();
const whisper14 = new Discord.Client();
const whisper15 = new Discord.Client();
const whisper16 = new Discord.Client();
const whisper17 = new Discord.Client();
const whisper18 = new Discord.Client();
const whisper19 = new Discord.Client();
const whisper20 = new Discord.Client();

whisper1.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ogz") {
    const streamOptions = { seek: 1, volume: 0 };
    var kanal = msg.member.voiceChannel;
    kanal.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

whisper2.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ogz") {
    const streamOptions = { seek: 1, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

whisper3.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ogz") {
    const streamOptions = { seek: 1, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

whisper4.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ogz") {
    const streamOptions = { seek: 1, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});

whisper5.on("message", async msg => {
  if (msg.content.toLowerCase() === ".ogz") {
    const streamOptions = { seek: 1, volume: 0 };
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.join().then(connection => {
      const stream = ytdl("s", {
        filter: "audioonly"
      });
      const dispatcher = connection.playStream(stream, streamOptions);
    });
  }
});



whisper1.login("NzUzNDAwNDcxMzAwODY2MDkx.X1lp9A.Xdc7E0pOiNJEDS5a8cEJsR4XQSc");
whisper2.login("MzUzOTYwNTMyMDQ4NDc4MjA4.X1Z40w.tmNXgRAdjiAfiP0LEuqCRBKEaJE");
whisper3.login("NzE2MzEzNTMxNzkxOTY2MzIw.X1LMkA.OgTzjl_2bWI5cCY7IjFfltGTl6A");
whisper4.login("NzM2MzcyMTc5Njk1OTYwMjE0.X2E6_A.V0XKUD4twsVfHVb2iIlLl3smyYk");
whisper5.login("NzUzMzMyMDcwMTQyNDQzNTIw.X1lD0A.Bu05Y6WY-YU7cP0oGlB84IRrUsU");
whisper6.login("mfa.rIyrNzE_2ijwdiO8AEaLMqnpIm4nYeqtXboPRlzCbuvMGKB6Quyr54EUDjd91OKevuzCs4dKemncFvEN0T17");