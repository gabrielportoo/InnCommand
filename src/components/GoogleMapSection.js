import React from "react";
import "./css/mapStyle.css";

function GoogleMapSection() {
  return (
    <div className="map-section">
      <div style={{ width: "100%", height: "100%" }}>
        <iframe
          title="Marina Park Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3180.189065415123!2d-38.519401384692746!3d-3.7169347972818116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748ec3e5b6a31%3A0x5fe7685c1213212!2sMarina%20Park%20Hotel!5e0!3m2!1spt-BR!2sbr!4v1631700821081!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMapSection;
