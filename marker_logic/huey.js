function addHueyLayer(map) {
    let layer = map.addInteractiveLayer('huey', huey, {
        name: 'Huey',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-collectibles-icon', 
                    html: `
                        <div style="
                            background-color: #D2B48C;
                            border-radius: 40px 40px 0px 40px;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: rotate(45deg);
                            border: 2px solid #8B4513;
                        ">
                            <i class="fas fa-helicopter" style="color: #8B4513; font-size: 16px;
                                transform: rotate(-45deg);"></i>
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