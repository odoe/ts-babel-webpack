import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import './index.css';

const map = new ArcGISMap({
    basemap: 'streets-vector'
});

const view = new MapView({
    map,
    container: 'viewDiv'
});

view.when(() => {
    console.log('view ready');
});
