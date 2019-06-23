const { Client, RichEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Bot is ready as ${client.user.tag}`);
  client.user.setStatus("online");
  console.log(client.user.presence.status);

  //   const testChannel = client.channels.find(channel => channel.name === "test");
  //   console.log(testChannel);
});

client.on("message", async message => {
  switch (message.content) {
    case "ping":
      message.reply("pong");
      break;
    case "hello":
      message.channel.send(`Hello ${message.author}!`);
      break;
    case "!andrea":
      message.channel.send(
        "https://www.linkedin.com/in/andreabellucciajuniordeveloper/"
      );
      break;
    case "!pretty":
      const embed = new RichEmbed()
        .setTitle("A Pretty Message")
        .setColor("RED")
        .setAuthor("Andrea", "")
        .addField("Something One", "Lorem Ipsum");

      message.channel.send(embed);
      break;
    case "!clear":
      const fetchedMessages = await message.channel.fetchMessages({
        limit: 100
      });
      message.channel.bulkDelete(fetchedMessages);
    default:
      return;
  }

  if (message.content.includes("!test")) {
    message.channel.send("Glad you are testing!");
  }
});

client.login("NTkyMzQ3OTk3NzY1ODk0MTU1.XQ-BJQ.tryVi798dqynmtCwdT44HICHE-A");
