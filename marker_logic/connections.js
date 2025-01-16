// Advanced
// Shows polygons and marker with overlapping IDs
// The geoJSON contains 5 features which combine logically by 3 IDs

function addConnections(map) {

    // New layer with id `collectibles` from geoJSON `collectibles`
    let layer = map.addInteractiveLayer('connections', connections, {

        // The display name for this layer
        name: 'Vehicle Spawn Locations connections',

        // This layer should have a tab in the sidebar with a list for each feature ID
        create_checkbox: false,

        // Each feature should have a popup
        // This internally calls `getPopupMedia()` to associate an image or video
        // See `map_utils.js` for an example
        create_feature_popup: true,

        // This layer should be visible by default
        is_default: false,

        // Let's do something on every feature
        // https://leafletjs.com/reference.html#geojson-oneachfeature
        onEachFeature: function (feature, layer) {

            // Listen for events and do something
            // https://leafletjs.com/reference.html#evented-on
            layer.on({

                // Do some fancy highlighting by hovering with the mouse
                mouseover: event => {
                    this.highlightFeature(feature.properties.id);
                },
                mouseout: event => {
                    this.removeFeatureHighlight(feature.properties.id);
                },

                // Clicking on the layer zooms to it
                click: event => {

                    // This layer gets a popup which also does some additional stuff…
                    this.zoomToFeature(feature.properties.id);

                    // …which can be manually included if no popup is generated:
                    // map.share_marker.prevent();
                    // Utils.setHistoryState(this.id, feature.properties.id);
                }
            });

            // Bind a tooltip which follows the mouse around when hovering over a feature that
            // isn't a point (marker)
            if (feature.geometry.type != "Point") {

                // https://leafletjs.com/reference.html#layer-bindtooltip
                layer.bindTooltip(feature.properties.name, {
                    sticky: true
                });
            }
        },

        // Give polygons some special styling
        // Function that return a path object or directly a path object
        // https://leafletjs.com/reference.html#geojson-style
        // https://leafletjs.com/reference.html#path-option
        polygon_style: function (feature) {
            return {
                color: 'red',
                opacity: 0.2
            };
        },

        // Give polygons some special styling when a highlight occurs e.g. by mouse hovering or location finding
        // Function that return a path object or directly a path object
        // https://leafletjs.com/reference.html#geojson-style
        // https://leafletjs.com/reference.html#path-option
        polygon_style_highlight: function (feature) {
            return {
                color: 'blue',
                opacity: 0.5,
                fillColor: 'red',
                fillOpacity: 0.2
            };
        },
    });

    // Optionally add further geojsons
    // layer.addGeoJson(another_geojson, {
    //     create_feature_popup: true,
    //     …
    // });
}
