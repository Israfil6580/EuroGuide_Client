import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { Link } from "react-router-dom";

const Tourists_spot = () => {
    const { addedSpot } = useContext(OwnContext)
    return (
        <div className="bg-base-200 ">
            <div className="max-w-7xl mx-auto relative">
                <div className="text-center py-10 relative">
                    <h1 className="title_font lg:text-6xl text-4xl font-bold uppercase">tourist spot</h1>
                    <div className="border border-b-8 glassmorphism rounded-full w-1/4 absolute left-2/4 -translate-x-2/4 bottom-5 border-base-300"></div>
                </div>
                <div className="h-32 w-32 bg-neutral rounded-full absolute -left-10 top-20"></div>
                <div className="h-44 w-3/4 bg-neutral-400 rounded-full absolute left-2/4 top-2/4 blur-3xl -translate-x-2/4"></div>
                <div className="h-44 w-3/4 bg-neutral-400 rounded-full absolute left-2/4 bottom-0 blur-3xl -translate-x-2/4"></div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-1 gap-6 pt-10">

                    {
                        addedSpot.slice(0, 6).map(addedspot => {
                            const { _id, image, tourists_spot_name, country_Name, description } = addedspot;
                            return (
                                <div key={_id} className="card w-auto bg-base-100 without_glassmorphism transition-transform lg:hover:scale-105 duration-200 ease-in-out">
                                    <figure className="px-2 pt-2">
                                        <img src={image} alt="Shoes" className="rounded-xl h-56 w-full object-cover" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-3xl uppercase tracking-normal font-semibold title_font">{tourists_spot_name}</h2>
                                        <h2 className="card-title text-2xl tracking-tight">{country_Name}</h2>
                                        <p>{description.split(" ").slice(0, 20).join(" ")}...</p>
                                        <div className="card-actions">
                                            <Link to={`/all_tourists_spot/details/${_id}`} className="btn btn-neutral">View Details</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Tourists_spot;