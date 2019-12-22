require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
        var map = new Map({
          basemap: "terrain"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 5,
          center: [-95, 40] // longitude, latitude
        });
      });