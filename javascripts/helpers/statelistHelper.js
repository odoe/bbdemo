
define(['Underscore', 'collections/StateCollection', 'views/forms/list', 'text!templates/infowindows/state.html'], function(_, stateCollection, list, stateTemplate) {
  return {
    initialize: function(map) {
      var fillSymbol, lineSymbol, qTask, query, slsFillColor, slsLineColor;
      dojo.require("esri.tasks.query");
      /*
                  #Symbology stuff
      */
      slsLineColor = new dojo.Color([255, 0, 0]);
      slsFillColor = new dojo.Color([200, 200, 0, 0.25]);
      lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, slsLineColor, 2);
      fillSymbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, lineSymbol, slsFillColor);
      qTask = new esri.tasks.QueryTask("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/2");
      query = new esri.tasks.Query();
      query.returnGeometry = true;
      query.outFields = ["STATE_NAME"];
      query.where = "STATE_NAME <> ''";
      query.outSpatialReference = map.spatialReference;
      return qTask.execute(query, function(results) {
        var compiledTemplate, data, item, name, template, _i, _len, _ref;
        _ref = results.features;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          name = item.attributes["STATE_NAME"];
          data = {
            name: name,
            url: "http://en.wikipedia.org/wiki/" + name
          };
          compiledTemplate = _.template(stateTemplate, data);
          template = new esri.InfoTemplate(name, compiledTemplate);
          item.setInfoTemplate(template);
          item.setSymbol(fillSymbol);
          stateCollection.add({
            name: name,
            graphic: item,
            map: map
          });
        }
        stateCollection.comparator = function(state) {
          return state.get("name");
        };
        stateCollection.sort();
        return list.render();
      });
    }
  };
});
