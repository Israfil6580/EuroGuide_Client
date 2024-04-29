
const UpdatePage = () => {

    return (
        <div className="max-w-7xl mx-auto mt-28 mb-10">
            <form className="space-y-2 glassmorphism rounded-2xl p-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold title_font pb-10">Update Spot</h1>
                </div>
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
                </div>
                <input type="submit" value="Update" className="btn btn-neutral block w-full rounded-md border-0 py-1.5 focus:ring-2 outline-none px-4 sm:text-sm sm:leading-6" />

            </form>
        </div>
    );
};

export default UpdatePage;