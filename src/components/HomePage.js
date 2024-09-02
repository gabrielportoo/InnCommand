import React from "react";
import ImageCarousel from "./CarrosselImage";
import ImageAndDescriptionSection from "./ImageAndDescriptionSection";
import RoomCarouselAndDescriptionSection from "./RoomCarouselAndDescriptionSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import GoogleMapSection from "./GoogleMapSection";

function HomePage() {
  return (
    <div>
      <ImageCarousel />
      <ImageAndDescriptionSection />
      <RoomCarouselAndDescriptionSection />
      <ServicesSection />
      <TestimonialsSection />
      <GoogleMapSection />
    </div>
  );
}

export default HomePage;
