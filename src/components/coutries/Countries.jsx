import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { Link } from "react-router-dom";

const Countries = () => {
    const { countries, showCountrySub } = useContext(OwnContext)
    return (
        <div className="bg-base-200 lg:pt-32 pt-20 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center pb-10 relative">
                    <h1 className="title_font lg:text-6xl text-4xl font-bold uppercase">Countries</h1>
                    <div className="border border-b-8 glassmorphism rounded-full w-1/4 absolute left-2/4 -translate-x-2/4 bottom-5 border-base-300"></div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-1 lg:gap-8 pt-10 relative">
                    <div className="h-32 w-32 bg-neutral rounded-full absolute -left-10 -bottom-10"></div>
                    <div className="h-32 w-3/4 bg-neutral-400 rounded-full absolute left-2/4 bottom-0  blur-[100px] -translate-x-2/4"></div>
                    <div className="h-28 w-3/4 bg-neutral-400 rounded-full absolute left-2/4 top-2/4 bottom-0 blur-[100px] -translate-x-2/4"></div>
                    {
                        countries.map((country) => {
                            return (
                                <Link to={"/specific_Country_Spot"} onClick={() => showCountrySub(country.country_Name)} key={country._id} className="card card-compact w-auto without_glassmorphism lg:hover:scale-105 transition-transform duration-200 cursor-pointer">
                                    <figure><img className=" h-96 w-full object-cover" src={country.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-4xl title_font font-semibold uppercase">{country.country_Name}</h2>
                                        <p>{country.description}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;