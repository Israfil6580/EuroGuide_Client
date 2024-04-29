import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { ScrollRestoration } from "react-router-dom";

const Details = () => {
    const { details } = useContext(OwnContext)
    const { image, tourists_spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_email, user_name } = details;
    console.log(details.image);
    return (
        <div className="relative max-w-7xl mx-auto mt-24 mb-14">
            <img className="w-full lg:h-[70vh] h-[calc(100vh-192px)] object-cover lg:rounded-3xl" src={image} alt="Image Description" />
            <div className="absolute top-10 rounded-2xl mx-2 lg:left-10 text-gray-200 blur_glassmorphism">
                <div className="p-4 md:p-5">
                    <h3 className="text-xl uppercase font-bold">
                        {tourists_spot_name}
                    </h3>
                    <h3 className="font-bold">
                        {country_Name}
                    </h3>
                    <h3 className="font-bold">
                        {location}
                    </h3>
                    <h3 className="font-semibold">
                        Cost : ${average_cost}
                    </h3>
                    <h3 className="font-semibold">
                        Seasonality : {seasonality}
                    </h3>
                    <h3 className="font-semibold">
                        Travel time : {travel_time}
                    </h3>
                    <h3 className="font-semibold">
                        Visitor per year : {totalVisitorsPerYear}
                    </h3>
                    <h3 className="font-semibold">
                        User email : {user_email}
                    </h3>
                    <h3 className="font-semibold">
                        User Name : {user_name}
                    </h3>
                    <p className="mt-1">
                        Description : {description}
                    </p>
                </div>
            </div>
            <ScrollRestoration />
        </div>

    );
};

export default Details;