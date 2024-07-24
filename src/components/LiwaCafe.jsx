import Header from "./Header";
import Hero from "./Hero";
import MenuCategories from "./MenuCategories";
import Menu from "./Menu";
import ChefRecommendations from "./ChefRecommendations";
import Discounts from "./Discounts";
import Surprise from "./Surprise";
import Footer from "./Footer";

const LiwaCafe = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Hero />
      <MenuCategories />
      <Menu />
      <ChefRecommendations />
      <Discounts />
      <Surprise />
      <Footer />
    </div>
  );
};

export default LiwaCafe;
