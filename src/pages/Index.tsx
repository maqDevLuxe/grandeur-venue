import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ElitePlanners from "@/components/sections/ElitePlanners";
import VenuePortfolio from "@/components/sections/VenuePortfolio";
import GalaWedding from "@/components/sections/GalaWedding";
import CapacityMetrics from "@/components/sections/CapacityMetrics";
import MichelinCatering from "@/components/sections/MichelinCatering";
import VirtualTours from "@/components/sections/VirtualTours";
import FullWidthEvent from "@/components/sections/FullWidthEvent";
import EventCounters from "@/components/sections/EventCounters";
import DesignInspiration from "@/components/sections/DesignInspiration";
import VIPSecurity from "@/components/sections/VIPSecurity";
import ClientAppreciations from "@/components/sections/ClientAppreciations";
import BookingCTA from "@/components/sections/BookingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ElitePlanners />
        <VenuePortfolio />
        <GalaWedding />
        <CapacityMetrics />
        <MichelinCatering />
        <VirtualTours />
        <FullWidthEvent />
        <EventCounters />
        <DesignInspiration />
        <VIPSecurity />
        <ClientAppreciations />
        <BookingCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
};

export default Index;
