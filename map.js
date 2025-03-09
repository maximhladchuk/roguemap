var interactive_map = new InteractiveMap('map', {
    // This will limit automatic zooming to this zoom level
    max_good_zoom: 6,
    // This is the max zoom the map will allow
    max_map_zoom: 8,
    website_source: 'https://github.com/interactive-game-maps/template',
    website_subdir: 'template',
    attribution: `
    <li><a href="https://www.example.com/index.html">$Thing</a> used by <a href="https://www.example.com/index.html">$person</a> under <a href="https://www.example.com/index.html">$license</a></li>
    <li>This project uses sample images from <a href="https://picsum.photos/">picsum.photos</a></li>
`
});

interactive_map.addTileLayer('Ingame map', {
    minNativeZoom: 0,
    maxNativeZoom: 8,
    maxZoom: 12,
    noWrap: true,
    attribution: 'Map from <a href="https://www.example.com/index.html">$source</a>'
});

addInformation(interactive_map);
addExfillsLayer(interactive_map);
addBoatsLayer(interactive_map);
addLittleBirdLayer(interactive_map);
addHueyLayer(interactive_map);
addCarLayer(interactive_map);
addK17Layer(interactive_map);
addInfillSpawnPoints(interactive_map);

interactive_map.finalize();