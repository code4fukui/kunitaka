# Kidssafe MAP in Kunitaka

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A civic tech project for community safety in the Kunitaka district of Echizen City, featuring an interactive map for hazardous area reporting and school zone data visualization.

## Demo

https://code4fukui.github.io/kunitaka/

## Features

-   **Interactive Map**: Displays dangerous locations, VR spots, and telematics data on a Leaflet.js map.
-   **Crowdsourced Data**: Utilizes community-reported hazard data in CSV format with Geo3x3 encoding.
-   **Multiple Data Layers**: Visualizes school zones (GeoJSON), VR spots, and hazardous driving events (CSV).
-   **Coordinate Conversion**: Includes a script to convert coordinates from the Japanese Geodetic System to WGS84.

## Data Sources

-   **Community-Reported Hazards**: CSV files detailing dangerous spots, such as [`kidssafe/村国3丁目.csv`](kidssafe/村国3丁目.csv).
-   **School Zones**: GeoJSON data for school routes, available at [schoolzone.geojson](https://code4fukui.github.io/kunitaka/schoolzone.geojson).
-   **VR Spots**: Data from [`vr_spot.csv`](vr_spot.csv) with 3D models from the [vr-kunitaka](https://github.com/code4fukui/vr-kunitaka/) project.
-   **Telematics Data**: Hazardous driving event data from Aioi Nissay Dowa Insurance in [`aioi_events.csv`](aioi_events.csv).
-   **Streetlight Data**: Raw data in [`streetlight/k.csv`](streetlight/k.csv) is converted to WGS84 coordinates.

## How to Adapt for Your Community

This project can be adapted for any local area.

1.  **Fork the Repository**: Start by forking this project to your own GitHub account.
2.  **Prepare Your Data**: Replace the sample CSV and GeoJSON files with data for your community.
3.  **Customize the Map**: Edit `index.html` to change the title, default map view, and data file paths.
4.  **Deploy**: Enable GitHub Pages in your repository's settings to publish your map online.

### Development Note

A [Deno](https://deno.land/) runtime is required to run the coordinate conversion script `streetlight/jp2wgs.js`, which processes local streetlight data.

## License

MIT License