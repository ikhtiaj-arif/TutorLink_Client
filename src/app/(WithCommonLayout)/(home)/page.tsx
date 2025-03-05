import FAQComponent from "@/components/modules/home/FAQ/Index";
import FeaturedTutors from "@/components/modules/home/FeaturedTutors/Index";
import HeroSection from "@/components/modules/home/HeroSection/Index";
import StatisticCardsContainer from "@/components/modules/home/Stats/Index";
import StepsContainer from "@/components/modules/home/Steps/Index";
import ReviewSection from "@/components/modules/home/Testimonial/Index";



const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedTutors />
      <ReviewSection />
      <StatisticCardsContainer />
      <StepsContainer />
      <FAQComponent />
    </div>
  );
};

export default HomePage;
