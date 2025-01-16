function addInformation(map) {
    let layer = map.addInteractiveLayer('information', information, {
        name: 'Information',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeFeatureHighlight(feature.properties.id);
                },
                click: event => {

                    
                    this.zoomToFeature(feature.properties.id);
                }
            });
            if (feature.geometry.type != "Point") {
                layer.bindTooltip(feature.properties.name, {
                    sticky: true
                });
            }
        },
        polygon_style: function (feature) {
            return {
                color: 'red',
                opacity: 0.2
            };
        },
        polygon_style_highlight: function (feature) {
            return {
                color: 'blue',
                opacity: 0.5,
                fillColor: 'red',
                fillOpacity: 0.2
            };
        },
        coordsToLatLng: function (coords) {
            var lx = (coords[0] + 1) * 0.5;
            var ly = (coords[1] - 1) * 0.5;
            return L.latLng(ly, lx);
        }  
    }); 
}
