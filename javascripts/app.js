
define(['jQuery', 'helpers/extentfactory', 'helpers/statelistHelper'], function($, extent, stateList) {
  dojo.require("esri.map");
  dojo.require('esri.dijit.Popup');
  return {
    start: function() {
      return dojo.addOnLoad(function() {
        var map, popup, refLayer, ref_url;
        popup = new esri.dijit.Popup(null, dojo.create('div'));
        map = new esri.Map("map", {
          extent: extent.losAngeles(),
          infoWindow: popup
        });
        dojo.connect(map, 'onLoad', function(_map_) {
          console.log('map loaded');
          return stateList.initialize(_map_);
        });
        $(window).resize(function() {
          return map.resize();
        });
        ref_url = "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";
        refLayer = new esri.layers.ArcGISTiledMapServiceLayer(ref_url);
        return map.addLayer(refLayer);
      });
    }
  };
});
