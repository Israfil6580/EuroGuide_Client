import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import Countries from "../../components/coutries/Countries";
import Customer from "../../components/customrs/Customer";
import Tourists_spot from "../../components/tourists_spots/Tourists_spot";

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Tourists_spot />
            <Countries />
            <Customer />
            <Faq />
        </div>
    );
};

export default Homepage;