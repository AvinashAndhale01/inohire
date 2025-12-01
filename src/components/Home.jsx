import HeroSection from "../components/home/HeroSection";
import TrustStats from "../components/home/TrustStats";
import ServicesOverview from "../components/home/ServicesOverview";
import CountriesCarousel from "../components/home/CountriesCarousel";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustStats />
      <ServicesOverview />
      <CountriesCarousel />
      <HowItWorks />
      {/* <Testimonials /> */}
      <WhyChooseUs />
    </div>
  );
};

export default Home;
