import HeroCarousel from "../../Components/Layout/HomeLayout/HeroCarousel";
import DoctorSlider from "../../Components/Layout/HomeLayout/DoctorSlider";
import ServicesSection from "../../Components/Layout/HomeLayout/ServicesSection";
import TestimonialsSection from "../../Components/Layout/HomeLayout/TestimonialsSection";
import SpecialtyCards from "../../Components/Layout/HomeLayout/SpecialtyCards";
import CityHelloDocters from "../../Components/Layout/HomeLayout/CityHelloDocters";
import ThelatestContent from "../../Components/Layout/HomeLayout/ThelatestContent";
import './HomePage.css';
const HomePage = () => {
  return (
    <div className="root-home-page">
      <HeroCarousel />
      <SpecialtyCards />
      <DoctorSlider />
      <CityHelloDocters />
      <ServicesSection />
      <TestimonialsSection />
      <ThelatestContent />
    </div>
  );
};

export default HomePage;
