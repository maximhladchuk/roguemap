function addHueyLayer(map) {
    // Create a new layer with ID 'collectibles'
    let layer = map.addInteractiveLayer('huey', huey, {
        // Display name for the sidebar
        name: 'Huey',

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
                    className: 'custom-collectibles-icon', // Class for styling the icon
                    html: `
                        <div style="
                            background-color: #D2B48C; /* Light brown background */
                            border-radius: 40px 40px 0px 40px;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: rotate(45deg); /* Повертаємо для вигляду маркера */
                            border: 2px solid #8B4513; /* Saddle brown */
                        ">
                            <i class="fas fa-helicopter" style="color: #8B4513; font-size: 16px;
                                transform: rotate(-45deg); /* Виправляємо ротацію іконки */"></i>
                        </div>
                    `,
                    iconSize: [30, 30], // Icon size
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