function addInfillSpawnPoints(map) {
    let layer = map.addInteractiveLayer('infillSpawnPoints', infillSpawnPoints, {
        name: 'Infill Spawn Points',
        create_checkbox: false,
        create_feature_popup: true,
        is_default: false,
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
    });
}
