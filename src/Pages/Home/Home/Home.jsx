import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Sports Academies School | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
        </div>
    );
};

export default Home;