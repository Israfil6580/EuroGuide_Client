import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { Link, ScrollRestoration } from "react-router-dom";

const SingleCountry = () => {
    const { singleCountry, seeDetails } = useContext(OwnContext);
    return (
        <div>
            {singleCountry.length === 0 ? (
                <div className="h-[calc(100vh-247px)] flex justify-center items-center">
                    <h1 className="text-3xl font-bold">No Spots in this country right now</h1>
                </div>
            ) : (
                <div className="min-h-[calc(100vh-247px)]">
                    <div className="mt-32 text-center">
                        <h1 className="text-3xl font-bold">{singleCountry.length} spot are found</h1>
                    </div>
                    <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-10 mb-20">
                        {singleCountry.map(con => {
                            const { _id, tourists_spot_name, country_Name, location, description, average_cost, seasonality } = con;
                            return (
                                <div key={_id} className="card w-auto bg-base-100 without_glassmorphism transition-transform lg:hover:scale-105 duration-200 ease-in-out">
                                    <div className="card-body">
                                        <h2 className="card-title text-3xl uppercase tracking-normal font-semibold title_font">{tourists_spot_name}</h2>
                                        <h2 className="card-title text-2xl tracking-tight">{country_Name}</h2>
                                        <h2 className="card-title text-2xl tracking-tight">{location}</h2>
                                        <h2 className="card-title text-2xl tracking-tight">{average_cost}</h2>
                                        <h2 className="card-title text-2xl tracking-tight">{seasonality}</h2>
                                        <p>{description}</p>
                                        <div className="card-actions">
                                            <Link to={"/all_tourists_spot/details"} onClick={() => seeDetails(_id)} className="btn btn-neutral">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            <ScrollRestoration />
        </div>
    );
};

export default SingleCountry;
