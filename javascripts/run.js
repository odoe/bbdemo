
/*
#This is essentially where you do
#your bootstrapping for your application.
#Define aliases for the paths to your
#JavaScript libraries or other folders
#you may use.
*/

require({
  baseUrl: 'javascripts',
  paths: {
    loader: 'libs/backbone/loader',
    jQuery: 'libs/jquery/jquery',
    Underscore: 'libs/underscore/underscore',
    Backbone: 'libs/backbone/backbone',
    dojo: 'libs/esri/dojo',
    templates: '../templates'
  },
  cach: {}
}, ['main']);
