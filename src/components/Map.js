import React from "react";
import PropTypes from "prop-types";
import { Map, TileLayer, Marker } from "react-leaflet";
import "../index.css";

const LeafletMap = ({ data }) => {
  const position = {
    lat: data ? data.location.lat : 37.40599,
    lng: data ? data.location.lng : -122.078514,
  };
  const zoom = 13;
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </Map>
  );
};

LeafletMap.propTypes = {
  data: PropTypes.object,
};

export default LeafletMap;
