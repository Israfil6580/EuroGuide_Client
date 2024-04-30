import { useContext, useEffect, useState } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { Bars } from "react-loader-spinner";
import { Link, ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const All_tourists = () => {
    const { addedSpot, theme, loading } = useContext(OwnContext);
    const [storedSpot, setStoredSpot] = useState([]);
    const [sortedByCost, setSortedByCost] = useState(false);

    useEffect(() => {
        const storedSpotData = localStorage.getItem('addedSpot');
        if (storedSpotData) {
            setStoredSpot(JSON.parse(storedSpotData));
        }
    }, []);

    useEffect(() => {
        if (addedSpot.length > 0) {
            localStorage.setItem('addedSpot', JSON.stringify(addedSpot));
            setStoredSpot(addedSpot);
        }
    }, [addedSpot]);

    const sortSpotsByCost = () => {
        const sortedSpots = [...storedSpot].sort((a, b) => {
            return a.average_cost - b.average_cost;
        });
        setStoredSpot(sortedSpots);
        setSortedByCost(true);
    };

    const resetSort = () => {
        setStoredSpot(addedSpot);
        setSortedByCost(false);
    };

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
    if (addedSpot.length === 0) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-247px)]">
                <h1 className="text-2xl lg:text-4xl uppercase font-bold title_font">No added tourist spots</h1>
            </div>
        );
    } else {
        return (
            <div className="bg-base-200 ">
                <Helmet>
                    <title>EuroGuide - all tourist</title>
                </Helmet>
                <div className="max-w-7xl mx-auto relative py-32">
                    <div className="flex justify-end mb-4">
                        {sortedByCost ? (
                            <button className="btn btn-primary mr-2" onClick={resetSort}>Reset Sort</button>
                        ) : (
                            <button className="btn btn-primary mr-2" onClick={sortSpotsByCost}>Sort by Cost</button>
                        )}
                    </div>
                    <div className={`h-full w-28 blur-[140px]  rounded-full absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 ${theme === 'light' ? 'bg-neutral' : 'bg-neutral-300 rotate-12'}`}></div>
                    <div className={`h-full w-28 blur-[140px]  rounded-full absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 ${theme === 'light' ? 'bg-neutral' : 'bg-neutral-300 -rotate-12'}`}></div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-1 gap-6">
                        {storedSpot.map(spot => {
                            const { image, tourists_spot_name, average_cost, totalVisitorsPerYear, travel_time, seasonality, _id } = spot;
                            return (
                                <div key={_id} className="card shadow-none w-auto bg-base-100 without_glassmorphism lg:hover:scale-105 transition-transform">
                                    <figure><img src={image} alt="Shoes" className=" h-60 w-full object-cover" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title uppercase">{tourists_spot_name}</h2>
                                        <h2 className="tracking-wide font-semibold">Average Cost - ${average_cost}</h2>
                                        <h2 className="tracking-wide font-semibold">Total Visitor (year) - {totalVisitorsPerYear}</h2>
                                        <h2 className="tracking-wide font-semibold">Travel_time - {travel_time} days</h2>
                                        <h2 className="tracking-wide font-semibold">Season - {seasonality}</h2>

                                        <div>
                                            <Link to={`/all_tourists_spot/details/${_id}`} className="btn btn-neutral">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ScrollRestoration />
            </div >
        );
    }
};

export default All_tourists;
