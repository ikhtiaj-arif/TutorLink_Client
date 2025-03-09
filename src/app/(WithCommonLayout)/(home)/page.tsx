import FAQComponent from "@/components/modules/home/FAQ/Index";
import FeaturedTutors from "@/components/modules/home/FeaturedTutors/Index";
import HeroSection from "@/components/modules/home/HeroSection/Index";
import JoinCommunity from "@/components/modules/home/JoinCommunity/Index";
import StatisticCardsContainer from "@/components/modules/home/Stats/Index";
import StepsContainer from "@/components/modules/home/Steps/Index";



const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedTutors />
      {/* <ReviewSection /> */}
      <StatisticCardsContainer />
      <StepsContainer />
      <FAQComponent />
      <JoinCommunity />
    </div>
  );
};

export default HomePage;
