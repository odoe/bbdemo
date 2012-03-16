define ['Underscore'
        'collections/StateCollection'
        'views/forms/list'
        'text!templates/infowindows/state.html'], (_, stateCollection, list, stateTemplate) ->
          initialize: (map) ->
            dojo.require "esri.tasks.query"
            ###
            #Symbology stuff
            ###
            slsLineColor = new dojo.Color [255,0,0]
            slsFillColor = new dojo.Color [200, 200, 0, 0.25]
            lineSymbol   = new esri.symbol.SimpleLineSymbol esri.symbol.SimpleLineSymbol.STYLE_SOLID, slsLineColor, 2
            fillSymbol   = new esri.symbol.SimpleFillSymbol esri.symbol.SimpleFillSymbol.STYLE_SOLID, lineSymbol, slsFillColor
            
            qTask                     = new esri.tasks.QueryTask "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/2"
            query                     = new esri.tasks.Query()
            query.returnGeometry      = true
            query.outFields           = ["STATE_NAME"]
            query.where               = "STATE_NAME <> ''"
            query.outSpatialReference = map.spatialReference
            
            qTask.execute query, (results) ->
              for item in results.features
                name = item.attributes["STATE_NAME"]

                # passing data to the template
                # to highlight how you can tweak
                # your infotemplate with a
                # templating engine
                data = 
                  name: name
                  url: "http://en.wikipedia.org/wiki/" + name

                # compile our html template
                compiledTemplate = _.template stateTemplate, data

                # use the compiled template as an InfoTemplate for feature
                template = new esri.InfoTemplate name, compiledTemplate
                item.setInfoTemplate template
                item.setSymbol fillSymbol
                stateCollection.add
                  name    : name
                  graphic : item
                  map     : map

              stateCollection.comparator = (state) ->
                state.get "name"

              stateCollection.sort()
              list.render()
