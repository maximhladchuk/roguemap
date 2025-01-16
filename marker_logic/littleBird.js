function addLittleBirdLayer(map) {
    let layer = map.addInteractiveLayer('littleBird', littleBird, {
        name: 'Little Bird',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-littlebird-icon', 
                    html: `
                        <div style="
                            background-color: #B0B0B0;
                            border-radius: 40px 40px 0px 40px;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: rotate(45deg);
                            border: 2px solid black;
                        ">
                            <i class="fas fa-helicopter" style="color: black; font-size: 16px;
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