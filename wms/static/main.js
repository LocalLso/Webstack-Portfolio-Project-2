let mapView = new ol.View({
   projection: "EPSG:4326",
   center: ol.proj.fromLonLat([27.54287, -29.342678], 'EPSG:4326', 'EPSG:3857'),
   zoom: 5,
});


let map = new ol.Map({
   target: 'map',
   view: mapView,
   controls: [
      new ol.control.FullScreen(),
      new ol.control.Rotate({autoHide: false,}),
      new ol.control.Zoom(),
      new ol.control.ZoomSlider() 
   ],
});


//Base Layers

let osmTileLayer = new ol.layer.Tile({
   title: 'Open Street Map',
   visible: true,
   type: 'base',
   source: new ol.source.OSM()
});


let noTileLayer = new ol.layer.Tile({
   title: 'None',
   type: 'base',
   visibility: false
});


let terrainLayer = new ol.layer.Tile({
   title: 'Terrain Layer',
   type: 'base',
   visibility: true,
   preload: Infinity,
   source: new ol.source.BingMaps({
      key: 'AnW4RnKWD9lSRABNJcT01BOlY1CLe2xiKS2EPPxPfvFx7ViLlrL8fCsILeWKaOYg',
      imagerySet: 'AerialWithLabelsOnDemand',
   }),
});


//Add base group Layers

let baseGroupLayer = new ol.layer.Group({
   title: 'Base Maps',
   fold: true,
   layers: [osmTileLayer, noTileLayer, terrainLayer]
});

map.addLayer(baseGroupLayer);


//Shape files

let shapeFile = new ol.layer.Tile({
   title: '10m_buildings',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:10m_buildings', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile1 = new ol.layer.Tile({
   title: ' building_footprint',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:building_footprint', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile2 = new ol.layer.Tile({
   title: 'buildingfootprint_h',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:buildingfootprint_h', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile3 = new ol.layer.Tile({
   title: 'provinces',
   source: new ol.source.TileWMS({
      format: new ol.format.GeoJSON(),
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:provinces', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile4 = new ol.layer.Tile({
   title: 'birds_data',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:birds_data', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile5 = new ol.layer.Tile({
   title: 'reea_or_2022_q2',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:reea_or_2022_q2', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile6 = new ol.layer.Tile({
   title: 'electricity production per building',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:electricity production per building', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile7 = new ol.layer.Tile({
   title: 'solar potential per building',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:solar potential per building', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile8 = new ol.layer.Tile({
   title: 'suitable_b',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:suitable_b', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile9 = new ol.layer.Tile({
   title: 'water',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:water', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile10 = new ol.layer.Tile({
   title: 'transportation',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:transportation', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


let shapeFile11 = new ol.layer.Tile({
   title: 'railwaylines',
   source: new ol.source.TileWMS({
      url: 'http://localhost:8080/geoserver/wmaDataWorkspace/wms',
      params: {'LAYERS':'wmaDataWorkspace:railwaylines', 'TILED': true},
      serverType: 'geoserver',
      visible: true
   })
});


//Wind

let windLayers = new ol.layer.Group({
   title: 'Wind',
   fold: true,
   layers: [shapeFile8, shapeFile9, shapeFile10, shapeFile11]
});

map.addLayer(windLayers);


//Bio Mass

let bioMassLayers = new ol.layer.Group({
   title: 'Bio Mass',
   fold: true,
   layers: [shapeFile4, shapeFile5, shapeFile6, shapeFile7]
});

map.addLayer(bioMassLayers);


//Solar

let solarLayers = new ol.layer.Group({
   title: 'Solar',
   fold: true,
   layers: [shapeFile, shapeFile1, shapeFile2, shapeFile3]
});

map.addLayer(solarLayers);


//Layer switcher

let layerSwitcher = new ol.control.LayerSwitcher({
   activationMode: 'click',
   startActive: false,
   groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);


//Mouse Position

let mousePosition = new ol.control.MousePosition({
   className: 'mousePosition',
   projection: 'EPSG:4326',
   coordinateFormat: function(coordinate){return ol.coordinate.format(coordinate,'{y}, {x}', 6);}
});

map.addControl(mousePosition);

 
//Scale Line

let scaleLine = new ol.control.ScaleLine({
   bar: true,
   text: true
});

map.addControl(scaleLine);


/* Pop Up */
container = document.getElementById('info');

let popup = new ol.Overlay.Popup({
   element: container,
   popupClass: "default",
   closeBox: true,
   onshow: function(){ console.log("You opened the box"); },
   onclose: function(){ console.log("You close the box"); },
   positioning: 'auto',
   autoPan: true,
   autoPanAnimation: {
      duration: 250,
   },
 });

map.addOverlay(popup);

let viewProjection = mapView.getProjection();
let viewResolution = mapView.getResolution();

map.on('click', function(evt) {

   let toDisplay = popup.getElement();
   let url = shapeFile3.getSource().getFeatureInfoUrl(
   evt.coordinate, viewResolution, viewProjection, {
      'INFO_FORMAT': 'text/javascript',
      'propertyName': 'provname'
   });


   if (url) {
      let parser = new ol.format.GeoJSON();
      $.ajax({
         url: url,
         dataType: 'jsonp',
         jsonpCallback: 'parseResponse',
         success: function (data) {
            let feature = data.features[0];
            let props = feature.properties;
            toDisplay = '<div><h2>Provinve: </h2><p>'+ props.provname.toUpperCase() +'</p></div>';
            popup.show(evt.coordinate, toDisplay);
         }
      })
   } else{
      popup.hide();
      popup.setOffset([0, 0]);
   }
});


// Check Up
/*map.on('singleclick', function(evt) {
   console.log('Here');
   feature = popup.getElement();
   feature.innerHTML = '';
   var url = shapeFile3.getSource().getFeatureInfoUrl(
   evt.coordinate, viewResolution, viewProjection, {
      'INFO_FORMAT': 'application/json',
      'propertyName': 'provname'
   });

   if (url) {
      $.getJSON(url, function(data){
            let toDisplay = data.features[0];
            let props = toDisplay.properties;
            feature.innerHTML = '<div><h2>Provinve: </h2><p>'+ props.provname.toUpperCase() +'</p></div>';
            popup.show(evt.coordinate, feature);
            console.log('Here');
      })
   } else {
      popup.setPosition(undefined);
   }
});*/


/*
map.on('click', function(evt) {
   console.log('Here');
   var toDisplay = popup.getElement();
   toDisplay.innerHTML = '';
   var url = shapeFile3.getSource().getFeatureInfoUrl(
   evt.coordinate, viewResolution, viewProjection, {
      'INFO_FORMAT': 'text/javascript',
      'propertyName': 'provname'
   });

   reqwest({
      url: url,
      dataType: 'jsonp',
      jsonpCallback: 'parseResponse',
      success: function (data) {
         console.log('In');
         let feature = data.features[0];
         let props = feature.properties;
         toDisplay.innerHTML = '<div><h2>Provinve: </h2><p>'+ props.provname.toUpperCase() +'</p></div>';
         popup.show(evt.coordinate, toDisplay);
      }
  })
});*/



/*map.on('click', function(evt) {
   var prettyCoord = ol.coordinate.toStringHDMS(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'), 2);
   popup.show(evt.coordinate, '<div><h2>Coordinates</h2><p>'+ prettyCoord +'</p></div>' );
});*/



/* Printing */

let printControl = new ol.control.PrintDialog();
map.addControl(printControl);
printControl.on('print', function(e) {
  // Print success
  if (e.canvas) {
    window.open().document.write('<img src="'+e.canvas.toDataURL()+'"/>');
  } else {
    console.warn('No canvas to export');
  }
});


/* Print control
var printControl = new ol.control.PrintDialog({ 
   // target: document.querySelector('.info'),
   // targetDialog: map.getTargetElement() 
   // save: false,
   // copy: false,
   // pdf: false
 });
 printControl.setSize('A4');
 map.addControl(printControl);*/
 
 /* On print > save image file 
 printControl.on(['print', 'error'], function(e) {
   // Print success
   if (e.image) {
     if (e.pdf) {
       // Export pdf using the print info
       var pdf = new jsPDF({
         orientation: e.print.orientation,
         unit: e.print.unit,
         format: e.print.size
       });
       pdf.addImage(e.image, 'JPEG', e.print.position[0], e.print.position[0], e.print.imageWidth, e.print.imageHeight);
       pdf.save(e.print.legend ? 'legend.pdf' : 'map.pdf');
     } else  {
       // Save image as file
       e.canvas.toBlob(function(blob) {
         var name = (e.print.legend ? 'legend.' : 'map.')+e.imageType.replace('image/','');
         saveAs(blob, name);
       }, e.imageType, e.quality);
     }
   } else {
     console.warn('No canvas to export');
   }
 });*/