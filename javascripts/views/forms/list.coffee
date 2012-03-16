define ['jQuery'
        'Underscore'
        'Backbone'
        'collections/StateCollection'
        'text!templates/forms/StateListView.html'], ($, _, Backbone, stateCollection, viewTemplate) ->
          ###
          # This list view will
          # handle rendering and events
          # of the sidebar list
          ###
          ListView = Backbone.View.extend
            el: $ "#sidebar>ul"
            tagName: "ul"
            initialize: ->
              @collection = stateCollection
            events:
              "click a": "clicked"
            clicked: (evt) ->
              evt.preventDefault()
              cid = $(evt.currentTarget).data "id"
              @collection.zoomByCid cid
            render: ->
              data =
                states: @collection.models
                _: _

              template = _.template viewTemplate, data
              $(@el).html ""
              $(@el).append template

          new ListView
