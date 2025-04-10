


mapboxgl.accessToken = 'pk.eyJ1IjoibWFnZ2llaHVhbmcxOSIsImEiOiJjbTk5NnM2bW4wMWRkMnFwdmJnajNudWxxIn0.haaMtxye2pY0sKfahY6hHQ';

const mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.99047, 40.72301], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 13.5, // starting zoom

}

const map = new mapboxgl.Map(mapOptions);


const markerOptions = {
    color: 'green',
}

// this isn't the most efficient code...

// // create the popup
// const popup = new mapboxgl.Popup({ offset: 30 }).setText(
//     'This restaurant has been issued their Outdoor Dining License by NYC DOT.'
// );

// // Whiskey Tavern
// const marker1 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.999572, 40.716425])
//     .setPopup(popup)
//     .addTo(map);

// // Diaspora
// const marker2 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.999494, 40.716850])
//     .setPopup(popup)
//     .addTo(map);

// // Bowery Meat Company
// const marker3 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.991816, 40.724585])
//     .setPopup(popup)
//     .addTo(map);

// // Cafe Maud
// const marker4 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.987314, 40.728605])
//     .setPopup(popup)
//     .addTo(map);

// B&H Dairy Lunch
// const marker5 = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-73.8116103, 40.9135339])
//     .setPopup(popup)
//     .addTo(map);    


const cbData = [
    {
        "restaurant_name": "Whiskey Tavern",
        "longitude": -73.999572,
        "latitude": 40.716425
    },
    {
        "restaurant_name": "Diaspora",
        "longitude": -73.999494,
        "latitude": 40.71685
    },
    {
        "restaurant_name": "Bowery Meat Company",
        "longitude": -73.991816,
        "latitude": 40.724585
    },
    {
        "restaurant_name": "Cafe Maud",
        "longitude": -73.987314,
        "latitude": 40.728605
    },
    {
        "restaurant_name": "B&H Dairy",
        "longitude": -73.988016,
        "latitude": 40.7284226
    }
];

cbData.forEach((record) => {
    new mapboxgl.Marker(markerOptions)
        .setLngLat([record.longitude, record.latitude])
        .setPopup(
            new mapboxgl.Popup({ offset: 30 }).setText(
                `${record.restaurant_name} has been issued their Outdoor Dining License by NYC DOT.`
            )
        )
        .addTo(map);
});