const Handlebars = require('handlebars')

Handlebars.registerHelper('if_optionsChecked', function (job, jobSelect, options) {
  if (job === jobSelect) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})