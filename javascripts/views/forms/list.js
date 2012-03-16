
define(['jQuery', 'Underscore', 'Backbone', 'collections/StateCollection', 'text!templates/forms/StateListView.html'], function($, _, Backbone, stateCollection, viewTemplate) {
  /*
            # This list view will
            # handle rendering and events
            # of the sidebar list
  */
  var ListView;
  ListView = Backbone.View.extend({
    el: $("#sidebar>ul"),
    tagName: "ul",
    initialize: function() {
      return this.collection = stateCollection;
    },
    events: {
      "click a": "clicked"
    },
    clicked: function(evt) {
      var cid;
      evt.preventDefault();
      cid = $(evt.currentTarget).data("id");
      return this.collection.zoomByCid(cid);
    },
    render: function() {
      var data, template;
      data = {
        states: this.collection.models,
        _: _
      };
      template = _.template(viewTemplate, data);
      $(this.el).html("");
      return $(this.el).append(template);
    }
  });
  return new ListView;
});
