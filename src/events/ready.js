module.exports = client => {
  console.log(`${client.user.username} Ready to playing with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  function randStatus() {
    let status = [`with ${client.users.size} users`, `on Saucecade`];
    let rstatus = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[rstatus], { type: 'PLAYING' });
  };
setInterval(randStatus, 60000);
  console.log(`${client.user.username} sukses online!`);
}
