const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Bot is ready as: ${client.user.tag}`);
  client.user.setStatus("online");

  //estado del bot
  console.log(client.user.presence.status);
});

client.on(`message`, (message) => {
  //Recive el mensaje
  console.log(message.content);

  if (message.content === `xd`) {
    message.channel.send(`xd ${message.author}`);
  }

  if (message.content === `hola`) {
    message.channel.send(`Wena Wena ${message.author}!`);
  }

  if (message.content.includes(`!test`)) {
    message.channel.send(`Si Funciona`);
  }

  if (message.content.includes(`!kevin`)) {
    message.channel.send(`https://www.twitch.tv/keeeevin11`);
  }

  if (message.content === "!informacion") {
    const embed = new MessageEmbed()
      .setTitle("A pretty message")
      .setColor(0xff0000)
      .setDescription("Hola", message.author)
      .addField("relleno One", "Mas contenido", true)
      .addField("relleno Two", "mas contenido", true)
      .addField("relleno Three", "mas contenido", false)
      .setAuthor(
        "ApexBot",
        "https://pngimage.net/wp-content/uploads/2018/05/code-logo-png-4.png"
      );
    message.channel.send(embed);
  }
});

client.login("NzI2NTA0OTU3NzQxNzYwNTUy.XveQhA.lT9Rfx95ifY5deCixirkj_t6HdI");
