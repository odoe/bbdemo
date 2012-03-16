
define(['Backbone', 'models/State'], function(Backbone, State) {
  var StateCollection;
  StateCollection = Backbone.Collection.extend({
    model: State,
    zoomByCid: function(cid) {
      var state;
      state = this.getByCid(cid);
      return state.zoom();
    }
  });
  return new StateCollection;
});
