const Tempeh = require('./handler/Tempeh');
const client = new Tempeh({
  fetchAllMembers: true,
  disabledEvents: ["TYPING_START", "USER_NOTE_UPDATE"],
  disableEveryone: true
});

require('./handler/events')(client);
require('./handler/module')(client);

client.login(process.env.BOT_TOKEN);
