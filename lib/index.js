// Load modules

var Hoek = require('hoek');


// Declare internals

var internals = {};


exports.register = function (pack, options, next) {

    Hoek.assert(typeof pack.route === 'function', 'Plugin permissions must allow route');
    Hoek.assert(typeof pack.state === 'function', 'Plugin permissions must allow state');
    Hoek.assert(typeof pack.helper === 'function', 'Plugin permissions must allow helper');
    Hoek.assert(typeof pack.state === 'function', 'Plugin permissions must allow events');
    Hoek.assert(typeof pack.state === 'function', 'Plugin permissions must allow ext');

    options = options || {};

    // Set any plugin dependent api properties here
    pack.api({
      hello: 'Hello',
      world: 'World',
      sayHello: sayHello
    });

    next();
};

function sayHello() {
  console.log(this.hello + ' ' + this.world + '!');
}
