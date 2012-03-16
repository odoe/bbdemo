define ['require'], (require) ->
  require [
    'app'
    'Underscore'
  ], (app, _) ->
    _.templateSettings = interpolate :/\{\{(.+?)\}\}/g, evaluate :/\{\#(.+?)\}\}/g
    app.start()
