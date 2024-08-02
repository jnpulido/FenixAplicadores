import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import FooterFenix from "../Components/FooterFenix"
import { Box, Typography } from "@mui/material";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const MoreContacts = () => (
  <Box>
    <MapContainer
      center={[-38.82775, -68.14449]}
      zoom={5}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-38.82775, -68.14449]}>
        <Popup>
          <a href="https://wa.me/+2993268150" target="_blank">
            +2993268150
          </a>
          Centenario, Neuquen, Argentina. <br /> Bienvenido!
        </Popup>
      </Marker>

      <Marker position={[-38.838998, -68.07398]}>
        <Popup>
          <Typography>Para mayor información contactanos</Typography>
          <a href="https://wa.me/+2993268150" target="_blank">
            <IoLogoWhatsapp /> +2993268150
          </a>
          <br />
          <a href="https://wa.me/+2993268150" target="_blank">
            <MdEmail /> nerea.fenixaplicadores@gmail.com
          </a>
          <br />
          Puerto Madryn, Neuquen, Argentina.
        </Popup>
      </Marker>
      <Marker position={[-34.61332, -68.33565]}>
        <Popup>
          <a href="https://wa.me/+2993268150" target="_blank">
            +2993268150
          </a>
          San Rafael, Mendoza, Argentina. <br /> Bienvenido!
        </Popup>
      </Marker>
      <Marker position={[-38.71898, -62.25844]}>
        <Popup>
          <a href="https://wa.me/+2993268150" target="_blank">
            +2993268150
          </a>
          Bahia blanca, Mendoza, Argentina. <br /> Bienvenido!
        </Popup>
      </Marker>
    </MapContainer>
    <FooterFenix />
  </Box>
);

export default MoreContacts;
