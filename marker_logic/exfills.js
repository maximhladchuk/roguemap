function addExfillsLayer(map) {
    // Створюємо новий шар із ідентифікатором 'exfills'
    let layer = map.addInteractiveLayer('exfills', exfills, {
        // Ім'я, яке відображається в бічній панелі
        name: 'Exfills',

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
                    className: 'custom-exfills-icon', // Клас для стилізації іконки
                    html: `
                        <div style="
                            background-color: #99ff99; /* Салатовий фон */
                            border-radius: 40px 40px 0px 40px;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transform: rotate(45deg); /* Повертаємо для вигляду маркера */
                            border: 2px solid #006600; /* Темно-зелений */
                        ">
                            <i class="fas fa-helicopter" style="color: green; font-size: 15px;
                                transform: rotate(-45deg); /* Виправляємо ротацію іконки */"></i>
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