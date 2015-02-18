var Handlebars = require('hbsfy/runtime');
Handlebars.registerHelper('ifMultiple', function(collection, options) {
  if(collection.length > 1) {
    return options.fn(this);
  }
  return options.inverse(this);
});
