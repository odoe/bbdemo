
define(['order!http://serverapi.arcgisonline.com/jsapi/arcgis/?v=2.7', 'order!libs/jquery/jquery.min', 'order!http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js', 'order!libs/underscore/underscore-min', 'order!libs/backbone/backbone-min'], function() {
  return {
    Backbone: Backbone.noConflict(),
    _: _.noConflict(),
    $: jQuery.noConflict(),
    dojo: dojo
  };
});
