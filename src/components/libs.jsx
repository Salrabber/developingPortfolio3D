import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

export const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-25.0, -52.0, 0],
        center: [-5, -3],
        scale: 1000
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="./libs/features.json"
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[31.9511, 50.1525]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffff">
          {"Home"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};


