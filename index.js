'use strict';

module.exports = {
  name: 'config-bug',
  
  config() {
    return this.app && this.app.options[this.name];
  }
};
