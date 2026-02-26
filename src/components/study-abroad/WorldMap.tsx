



/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapData from "@/constants/countries.json";
import ContainerWrapper from "../ContainerWrapper";
import HeadingTypography from "../Heading";

interface CountryFeature extends Feature {
  properties: {
    ADMIN: string;
    ISO_A3: string;
    path?: string;
    [key: string]: any;
  };
  geometry: Geometry;
}

const WorldMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null;

  const countryStyle = {
    fillColor: "#44b9bc",
    fillOpacity: 1,
    color: "#000",
    weight: 0.3,
  };

  const getFlagUrl = (isoCode: string) =>
    `https://flagsapi.com/${isoCode.toUpperCase()}/shiny/24.png`;

  const handleCountryClick = (path?: string) => {
    if (path) {
      window.location.href = path;
    } 
  };

  const onEachCountry = (feature: CountryFeature, layer: L.Layer) => {
    const { ADMIN: countryName, ISO_A3: isoCode, path } = feature.properties;
    const flagUrl = getFlagUrl(isoCode);

    const popupContent = `
      <div style="display: flex; align-items: center; color: #00999E;">
        <img src="${flagUrl}" alt="${countryName} flag" style="margin-right: 8px;" />
        <span><strong>${countryName}</strong></span>
      </div>
    `;

    if ((layer as any).on) {
      (layer as L.Path).on({
        click: () => handleCountryClick(path),
        mouseover: (event: L.LeafletMouseEvent) => {
          (layer as L.Layer)
            .bindPopup(popupContent, {
              autoPan: true,
              keepInView: true,
            })
            .openPopup(event.latlng);
        },
        mouseout: () => {
          (layer as L.Layer).closePopup();
        },
      });

      if (path) {
        (layer as L.Path).setStyle({ fillColor: '#2b7171' });
      }
    }
  };

  return (
    <ContainerWrapper className="py-10">
      <HeadingTypography content="Pick Your Destination" textAlign="center" />
      <div className="h-[40vh] sm:h-[60vh] md:h-screen mx-auto border-2 my-5 bg-white rounded-xl p-5 border-[#00999e]">
        <MapContainer
          center={[30, 10]}
          zoom={2}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", backgroundColor: 'white' }}
        >
          <GeoJSON
            style={countryStyle}
            data={mapData as FeatureCollection}
            onEachFeature={onEachCountry}
          />
        </MapContainer>
      </div>
    </ContainerWrapper>
  );
};

export default WorldMap;