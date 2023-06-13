import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import Contents from "../Contents/Contents";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Sports Academies School | Home</title>
            </Helmet>
            <Banner></Banner>
            <Contents></Contents>
            <Classes></Classes>
        </div>
    );
};

export default Home;