import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import NewsLetter from "../../components/Home/NewsLatter/NewsLetter";
import Team from "../../components/Home/Team/Team";
import Features from "../../components/Home/Features/Features"
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import FeaturedClasses from "../../components/Home/FeaturedClasses/FeaturedClasses";

const Home = () => {
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>
            {/* AboutUs */}
            <AboutUs></AboutUs>
            {/* our fetures */}
            <Features></Features>
            {/* featured classes  */}
            <FeaturedClasses></FeaturedClasses>
            {/* Our team  */}
            <Team></Team>
            {/* Testimonials */}
            <Testimonials></Testimonials>
            {/* NewsLetter */}
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;