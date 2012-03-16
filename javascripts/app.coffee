define ['jQuery', 'helpers/extentfactory', 'helpers/statelistHelper'], ($, extent, stateList) ->
  dojo.require "esri.map"
  dojo.require 'esri.dijit.Popup'
  start: ->
      dojo.addOnLoad ->
        popup = new esri.dijit.Popup null, dojo.create 'div'
        map = new esri.Map "map", extent: extent.losAngeles(), infoWindow: popup
        dojo.connect map, 'onLoad', (_map_) ->
          console.log 'map loaded'
          stateList.initialize _map_
        $(window).resize ->
          map.resize()
        
        ref_url  = "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
        refLayer = new esri.layers.ArcGISTiledMapServiceLayer ref_url
        map.addLayer refLayer
