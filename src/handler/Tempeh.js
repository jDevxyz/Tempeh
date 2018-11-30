const { Client, Collection } = require('discord.js');

class Tempeh extends Client {
  constructor (opt) {
    super (opt);
    
    this.queue = new Collection();
    this.util = require('./util.js');
  }
}

module.exports = Tempeh;
