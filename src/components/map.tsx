import React, { useRef, useEffect, useState } from 'react';
import maplibregl, { NavigationControl } from 'maplibre-gl';
import './map.css';



export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng = 2.29376;
    const lat = 48.971776;
    const zoom = 14;
    const [API_KEY_MAP] = useState(process.env.API_KEY_MAP);
    // console.log(API_KEY_MAP)

    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY_MAP}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl({
            showCompass: true
        }), 'top-left');

    },[]);
    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}