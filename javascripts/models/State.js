
define(['Backbone'], function(Backbone) {
  var State;
  return State = Backbone.Model.extend({
    initialize: function(state) {
      this.state = state;
      return {
        defaults: {
          name: "",
          graphic: null,
          map: null
        }
      };
    },
    zoom: function() {
      var extent;
      this.state.map.graphics.clear();
      this.state.map.graphics.add(this.state.graphic);
      extent = this.state.graphic.geometry.getExtent();
      return this.state.map.setExtent(extent, true);
    }
  });
});
