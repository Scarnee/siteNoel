"use client";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MyMap() {
    return (
        <MapContainer center={[46.64677019171849, -1.4051025423278136]} zoom={14} scrollWheelZoom={true} className="w-2/3  self-center aspect-video justify-center -z-40">
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[46.64677019171849, -1.4051025423278136]}>
                <Popup>Les illumines de la Moutilliere</Popup>
            </Marker>
        </MapContainer>
    );
}
