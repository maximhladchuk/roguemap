function getPopupMedia(feature, layer_id) {

    var html = document.createElement('div');

    if (feature.properties.image_id) {

        var image_link = document.createElement('a');
        image_link.href = `images/${layer_id}/${feature.properties.image_id}.png`;
        var image = document.createElement('img');
        image.className = 'popup-media';
        image.src = image_link.href;
        image_link.appendChild(image);
        html.appendChild(image_link);

    } else if (feature.properties.external_id) {
        var image_link = document.createElement('a');
        image_link.href = `https://www.example.com/collectibles${feature.properties.image_link}`;

        var image = document.createElement('img');

        image.className = 'popup-media';

        image.src = `https://picsum.photos/${feature.properties.external_id}`;

        image_link.appendChild(image);

        html.appendChild(image_link);

    } else if (feature.properties.video_id) {

        const POPUP_WIDTH_16_9 = Math.min(500, window.screen.availWidth - 100, (window.screen.availHeight - 200) * 16 / 9);
        const POPUP_WIDTH_4_3 = Math.min(500, window.screen.availWidth - 100, (window.screen.availHeight - 200) * 4 / 3);

        var video = document.createElement('iframe');

        video.className = 'popup-media';

        video.width = POPUP_WIDTH_16_9;
        video.height = POPUP_WIDTH_16_9 / 16 * 9;

        video.src = `https://www.youtube-nocookie.com/embed/${feature.properties.video_id}`;

        html.appendChild(video);
    }
    return html;
}
