import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

interface Props {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const Map = ({ center, zoom }: Props) => {
  const draggable = false;
  const zoomControl = false;
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
          draggable,
          zoomControl,
        })
      );
    }
  }, [ref, map]);

  return (
    <Box
      sx={{ width: { xs: "100%", sm: "75%" }, height: "30rem" }}
      component="div"
      ref={ref}
    />
  );
};

export default Map;
