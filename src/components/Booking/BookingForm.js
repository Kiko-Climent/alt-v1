import { useEffect } from "react";

const DJBookingForm = () => {
  useEffect(() => {
    // Insertar el script solo una vez al montar el componente
    const script = document.createElement("script");
    script.src = "https://connect.gigwell.com/roster/loader.js";
    script.type = "text/javascript";
    script.crossOrigin = "*";
    script.async = true;
    document.body.appendChild(script);

    // Limpieza del script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <gigwell-embedded-roster
        agency="778319"
        artist-id="779343"
        settings="default"
        standalone-profile="true"
      ></gigwell-embedded-roster>
    </div>
  );
};

export default DJBookingForm;
