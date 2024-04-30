import { useContext, useState, useEffect } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { ScrollRestoration, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Bars } from "react-loader-spinner";

const Details = () => {
    const { addedSpot } = useContext(OwnContext);
    const locations = useLocation();
    const { id } = useParams(locations);
    const [loading, setLoading] = useState(true);
    const [spotData, setSpotData] = useState(null);

    useEffect(() => {
        const spot = addedSpot.find(spot => spot._id === id);
        setSpotData(spot);
        setLoading(false);
    }, [addedSpot, id]);

    if (loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Bars
                    height="80"
                    width="80"
                    color="#2B3440"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }

    return (
        <div className="relative max-w-7xl mx-auto mt-24 mb-14">
            <Helmet>
                <title>EuroGuide - Details</title>
            </Helmet>
            {spotData && (
                <>
                    <img className="w-full lg:h-[70vh] min-h-[calc(100vh-192px)] object-cover lg:rounded-3xl" src={spotData.image} alt="Image Description" />
                    <div className="absolute top-10 rounded-2xl mx-2 lg:left-10 text-neutral blur_glassmorphism">
                        <div className="p-4 md:p-5">
                            <h3 className="text-xl uppercase font-bold">
                                {spotData.tourists_spot_name}
                            </h3>
                            <h3 className="font-bold">
                                {spotData.country_Name}
                            </h3>
                            <h3 className="font-bold">
                                {spotData.location}
                            </h3>
                            <h3 className="font-semibold">
                                Cost : ${spotData.average_cost}
                            </h3>
                            <h3 className="font-semibold">
                                Seasonality : {spotData.seasonality}
                            </h3>
                            <h3 className="font-semibold">
                                Travel time : {spotData.travel_time} days
                            </h3>
                            <h3 className="font-semibold">
                                Visitor per year : {spotData.totalVisitorsPerYear}
                            </h3>
                            <h3 className="font-semibold">
                                User email : {spotData.user_email}
                            </h3>
                            <h3 className="font-semibold">
                                User Name : {spotData.user_name}
                            </h3>
                            <p className="mt-1">
                                Description : {spotData.description}
                            </p>
                        </div>
                    </div>
                </>
            )}
            <ScrollRestoration />
        </div>
    );
};

export default Details;
