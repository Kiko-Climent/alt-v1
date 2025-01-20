import { useEffect } from "react";

const DJBookingForm = () => {
  useEffect(() => {
    // Insertar el script solo una vez al montar el componente
    const script = document.createElement("script");
    script.src = "https://connect.gigwell.com/booknow/booknow.js";
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
      <gigwell-booking-form
        open-on-load="true"
        agency-id="778319"
        settings="default"
      ></gigwell-booking-form>
    </div>
  );
};

export default DJBookingForm;
