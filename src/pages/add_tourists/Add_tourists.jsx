import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { Helmet } from "react-helmet-async";

const AddTourists = () => {
    const { handleAddSpot, users } = useContext(OwnContext)
    return (
        <div className="flex justify-center bg-base-200 relative min-h-screen items-center">
            <Helmet>
                <title>EuroGuide - add tourist</title>
            </Helmet>
            <div className="h-60 w-60 absolute bg-neutral rounded-full blur-[130px] left-2/4 top-12 -translate-x-2/4"></div>
            <div className="flex flex-col justify-center px-6 py-10 lg:px-8 lg:w-2/4 w-full h-auto mt-20 mx-2 z-10 rounded-3xl without_glassmorphism">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                        Add Tourists Spot Here
                    </h2>
                </div>

                <div className="mt-4 sm:w-full">
                    <form onSubmit={handleAddSpot} className="space-y-2">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <label>Image URL</label>
                                <input type="url" id="image" name="image" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter image URL..." required />
                            </div>
                            <div>
                                <label>Tourists Spot Name</label>
                                <input type="text" id="tourists_spot_name" name="tourists_spot_name" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter tourists spot name..." required />
                            </div>
                            <div>
                                <label>Country Name</label>
                                <select
                                    id="country_Name"
                                    name="country_Name"
                                    className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                                    defaultValue=""
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
                                <input type="text" id="location" name="location" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter location..." required />
                            </div>
                            <div>
                                <label>Short Description</label>
                                <textarea id="description" name="description" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter short description..." required></textarea>
                            </div>
                            <div>
                                <label>Average Cost ($)</label>
                                <input type="number" min='1' id="average_cost" name="average_cost" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter average cost..." required />
                            </div>
                            <div>
                                <label>Seasonality</label>
                                <select
                                    id="seasonality"
                                    name="seasonality"
                                    className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6"
                                    defaultValue=""
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
                                <input type="number" id="travel_time" name="travel_time" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter travel time..." required />
                            </div>
                            <div>
                                <label>Total Visitors Per Year</label>
                                <input type="number" min='1' id="totalVisitorsPerYear" name="totalVisitorsPerYear" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter total visitors per year..." required />
                            </div>
                            <div>
                                <label>User Email</label>
                                <input type="email" id="user_email" name="user_email" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter your email..." defaultValue={users && users.email} readOnly />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type="text" id="user_name" name="user_name" className="block w-full rounded-md border-0 py-1.5 glassmorphism focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" placeholder="Enter your name..." required />
                            </div>
                        </div>



                        <input type="submit" value="Add" className="btn btn-neutral block w-full rounded-md border-0 py-1.5 focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" />

                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddTourists;
