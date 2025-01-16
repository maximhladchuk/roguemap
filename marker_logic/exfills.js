function addExfillsLayer(map) {
    let layer = map.addInteractiveLayer('exfills', exfills, {
        name: 'Exfills',
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-exfills-icon', 
                    html: `
                        <div style="
                            background-color: #99ff99;
                            border-radius: 40px 40px 0px 40px;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: rotate(45deg);
                            border: 2px solid #006600;
                        ">
                            <i class="fas fa-helicopter" style="color: green; font-size: 15px;
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