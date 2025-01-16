function addCarLayer(map) {
    let layer = map.addInteractiveLayer('car', car, {
        name: 'Cars',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-car-icon', 
                    html: `
                        <div style="
                            position: relative;
                            background-color: #FFCC99;
                            width: 30px;
                            height: 30px;
                            border-radius: 40px 40px 0px 40px;
                            transform: rotate(45deg);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 2px solid #FF6600;
                        ">
                            <i class="fas fa-car" style="
                                color: #FF6600; 
                                font-size: 16px; 
                                transform: rotate(-45deg);
                            "></i>
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
