function addCarLayer(map) {
    // Створюємо новий шар із ідентифікатором 'car'
    let layer = map.addInteractiveLayer('car', car, {
        // Ім'я, яке відображається в бічній панелі
        name: 'Cars',

        // Вкладка в бічній панелі зі списком ID кожної мітки
        create_checkbox: true,

        // Кожна мітка матиме попап
        create_feature_popup: true,

        // Шар буде видимим за замовчуванням
        is_default: true,

        // Кастомізуємо іконки для маркерів
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: L.divIcon({
                    className: 'custom-car-icon', // Клас для стилізації іконки
                    html: `
                        <div style="
                            position: relative;
                            background-color: #FFCC99; /* Світло-оранжевий фон */
                            width: 30px;
                            height: 30px;
                            border-radius: 40px 40px 0px 40px;
                            transform: rotate(45deg); /* Повертаємо для вигляду маркера */
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: 2px solid #FF6600; /* Оранжевий */
                        ">
                            <i class="fas fa-car" style="
                                color: #FF6600; 
                                font-size: 16px; 
                                transform: rotate(-45deg); /* Виправляємо ротацію іконки */
                            "></i>
                        </div>
                    `,
                    iconSize: [30, 30], // Розмір іконки
                    iconAnchor: [20, 40], // Точка якірця
                    popupAnchor: [0, -40] // Точка відкриття попапа
                }),
                riseOnHover: true
            });
        }
    });

    // Додаємо геоJSON дані, якщо необхідно
    // layer.addGeoJson(another_geojson, {
    //     create_feature_popup: true,
    //     …
    // });
}
