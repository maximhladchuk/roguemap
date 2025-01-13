function addLittleBirdLayer(map) {
    // Create a new layer with ID 'littleBird'
    let layer = map.addInteractiveLayer('littleBird', littleBird, {
        // Display name for the sidebar
        name: 'Little Bird',

        // Add a tab in the sidebar with a list for each marker ID
        create_checkbox: true,

        // Each marker will have a popup
        create_feature_popup: true,

        // The layer will be visible by default
        is_default: true,

        // Customize icons for the markers
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-littlebird-icon', // Class for styling the icon
                    html: `
                        <div style="
                            background-color: #B0B0B0; /* Grey background */
                            border-radius: 50%;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        ">
                            <i class="fas fa-helicopter" style="color: black; font-size: 16px;"></i>
                        </div>
                    `,
                    iconSize: [40, 40], // Icon size
                    iconAnchor: [20, 40], // Anchor point
                    popupAnchor: [0, -40] // Popup opening point
                }),
                riseOnHover: true
            });
        }
    });

    // Optionally add additional GeoJSON data
    // layer.addGeoJson(another_geojson, {
    //     create_feature_popup: true,
    //     …
    // });
}