
define(['require'], function(require) {
  return require(['app', 'Underscore'], function(app, _) {
    _.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g,
      evaluate: /\{\#(.+?)\}\}/g
    };
    return app.start();
  });
});
