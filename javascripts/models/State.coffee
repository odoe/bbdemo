define ['Backbone'], (Backbone) ->
  State = Backbone.Model.extend
    initialize: (@state) ->
      defaults:
        name: ""
        graphic: null
        map: null

    zoom: ->
      @state.map.graphics.clear()
      @state.map.graphics.add @state.graphic
      extent = @state.graphic.geometry.getExtent()
      @state.map.setExtent extent, true
