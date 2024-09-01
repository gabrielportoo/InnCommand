import React from "react";
import NavigationBar from "./components/NavigationBar";
import ImageCarousel from "./components/CarrosselImage";
import ImageAndDescriptionSection from "./components/ImageAndDescriptionSection";
import RoomCarouselAndDescriptionSection from "./components/RoomCarouselAndDescriptionSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GoogleMapSection from "./components/GoogleMapSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <ImageCarousel />
      <ImageAndDescriptionSection />
      <RoomCarouselAndDescriptionSection />
      <ServicesSection />
      <TestimonialsSection />
      <GoogleMapSection />
      <Footer />
    </div>
  );
}

export default App;
