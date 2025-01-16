function addBoatsLayer(map) {
    let layer = map.addInteractiveLayer('boats', boats, {
        name: 'Boats',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-boats-icon', 
                    html: `
                        <div style="
                            background-color: #ADD8E6;
                            border-radius: 40px 40px 0px 40px;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: rotate(45deg);
                            border: 2px solid #00008B;                       
                        ">
                            <i class="fas fa-ship" style="color: #00008B; font-size: 16px; 
                                transform: rotate(-45deg);"></i> <!-- Dark blue ship icon -->
                        </div>
                    `,
                    iconSize: [30, 30], 
                    iconAnchor: [20, 40], 
                    popupAnchor: [0, -40] 
                }),
                riseOnHover: true
            });
        }
    });
}