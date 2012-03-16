define ['Backbone', 'models/State'], (Backbone, State) ->
  StateCollection = Backbone.Collection.extend
    model: State

    zoomByCid: (cid) ->
      state = @getByCid cid
      state.zoom()

  new StateCollection
