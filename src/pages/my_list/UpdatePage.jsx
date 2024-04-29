import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { ScrollRestoration, useLocation, useParams } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import toast from "react-hot-toast";

const UpdatePage = () => {
    const { addedSpot, setAddedSpot } = useContext(OwnContext)
    const locations = useLocation();
    const { id } = useParams(locations);
    const spot_data = addedSpot.find(spot => spot._id === id);

    // Check if spot_data is defined
    if (!spot_data) {
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

    // Destructure properties from spot_data
    const { image, tourists_spot_name, country_Name, location, description, average_cost, seasonality, travel_time, totalVisitorsPerYear } = spot_data;
    const update_spot = (e) => {
        e.preventDefault();
        const { _id } = spot_data;

        const formData = {
            image: e.target.image.value,
            tourists_spot_name: e.target.tourists_spot_name.value,
            country_Name: e.target.country_Name.value,
            location: e.target.location.value,
            description: e.target.description.value,
            average_cost: e.target.average_cost.value,
            seasonality: e.target.seasonality.value,
            travel_time: e.target.travel_time.value,
            totalVisitorsPerYear: e.target.totalVisitorsPerYear.value
        };

        fetch(`https://euro-guide-server.vercel.app/added_spot/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(updatedData => {
                // Update addedSpot state with the updated data
                setAddedSpot(prevState => prevState.map(spot => spot._id === _id ? updatedData : spot));
                toast.success("Spot successfully updated");
            })
    }
    return (
        <div className="max-w-7xl mx-auto mt-28 mb-10">
            <form onSubmit={update_spot} className="space-y-2 glassmorphism rounded-2xl p-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold title_font pb-10">Update Spot</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label>Image URL</label>
                        <input type="url" id="image" name="image" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" defaultValue={image} placeholder="Enter image URL..." required />
                    </div>
                    <div>
                        <label>Tourists Spot Name</label>
                        <input type="text" id="tourists_spot_name" name="tourists_spot_name" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" defaultValue={tourists_spot_name} placeholder="Enter tourists spot name..." required />
                    </div>
                    <div>
                        <label>Country Name</label>
                        <select
                            id="country_Name"
                            name="country_Name"
                            className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                            defaultValue={country_Name}
                            required
                        >
                            <option className="text-neutral" value="" disabled>Select a country...</option>
                            <option className="text-neutral" value="France">France</option>
                            <option className="text-neutral" value="Italy">Italy</option>
                            <option className="text-neutral" value="Spain">Spain</option>
                            <option className="text-neutral" value="England">England</option>
                            <option className="text-neutral" value="Netherlands">Netherlands</option>
                            <option className="text-neutral" value="Switzerland">Switzerland</option>
                        </select>
                    </div>

                    <div>
                        <label>Location</label>
                        <input type="text" id="location" name="location" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter location..." defaultValue={location} required />
                    </div>
                    <div>
                        <label>Short Description</label>
                        <textarea id="description" name="description" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter short description..." defaultValue={description} required></textarea>
                    </div>
                    <div>
                        <label>Average Cost ($)</label>
                        <input type="number" min='1' id="average_cost" name="average_cost" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter average cost..." defaultValue={average_cost} required />
                    </div>
                    <div>
                        <label>Seasonality</label>
                        <select
                            id="seasonality"
                            name="seasonality"
                            className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                            defaultValue={seasonality}
                            required
                        >
                            <option className="text-neutral" value="" disabled>Select a season...</option>
                            <option className="text-neutral" value="Spring">Spring</option>
                            <option className="text-neutral" value="Summer">Summer</option>
                            <option className="text-neutral" value="Autumn">Autumn</option>
                            <option className="text-neutral" value="Winter">Winter</option>
                        </select>
                    </div>

                    <div>
                        <label>Travel Time(days)</label>
                        <input type="number" id="travel_time" name="travel_time" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter travel time..." required defaultValue={travel_time} />
                    </div>
                    <div>
                        <label>Total Visitors Per Year</label>
                        <input type="number" min='1' id="totalVisitorsPerYear" name="totalVisitorsPerYear" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter total visitors per year..." required defaultValue={totalVisitorsPerYear} />
                    </div>
                </div>
                <input type="submit" value="Update" className="btn btn-neutral block w-full rounded-md border-0 py-1.5 focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" />
            </form>
            <ScrollRestoration />
        </div>
    );
};

export default UpdatePage;
