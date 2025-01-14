function addK17Layer(map) {
    // Add a new layer for K17 markers
    let layer = map.addInteractiveLayer('k17', k17, {
        name: 'K17',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-k17-icon',
                    html: `
                        <div style="
                            position: relative;
                            background-color: #D8BFD8; /* Light purple */
                            width: 30px;
                            height: 30px;
                            border-radius: 40px 40px 0px 40px;
                            transform: rotate(45deg);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 2px solid #4B0082; /* Dark purple */
                        ">
                            <i class="fas fa-truck-pickup" style="
                                color: #4B0082; /* Dark purple */
                                font-size: 16px;
                                transform: rotate(-45deg);
                            "></i>
                        </div>
                    `,
                    iconSize: [30, 30],
                    iconAnchor: [15, 30],
                    popupAnchor: [0, -30]
                }),
                riseOnHover: true
            });
        }
    });

    // Optionally, add additional GeoJSON data if needed
}
