import React from "react";
import NavigationBar from "./components/NavigationBar";
import ImageCarousel from "./components/CarrosselImage";
import ImageAndDescriptionSection from "./components/ImageAndDescriptionSection";
import RoomCarouselAndDescriptionSection from "./components/RoomCarouselAndDescriptionSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div>
      <NavigationBar />
      <ImageCarousel />
      <ImageAndDescriptionSection />
      <RoomCarouselAndDescriptionSection />
      <ServicesSection />
    </div>
  );
}

export default App;
