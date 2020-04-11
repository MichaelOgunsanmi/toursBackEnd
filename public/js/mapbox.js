
export const displayMap = locations => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbG9ndW5zYW5taSIsImEiOiJjazVjdWFqczcwYmUzM3BxZnlmdjVjZjByIn0.5-kccAXdV326Iz9KBt7sRg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/michaelogunsanmi/ck8uo04zm11x91imgm0jld1ez',
        scrollZoom: false
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach(location => {
        const htmlElement = document.createElement('div');
        htmlElement.className = 'marker';

        new mapboxgl.Marker({
            element: htmlElement,
            anchor: 'bottom'
        }).setLngLat(location.coordinates).addTo(map);

        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(location.coordinates)
            .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
            .addTo(map);

        bounds.extend(location.coordinates);
    });

    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};
