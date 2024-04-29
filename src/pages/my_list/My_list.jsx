// My_list.js
import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";
import { Link } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const My_list = () => {
    const { addedSpot, users, theme, deleteSpot } = useContext(OwnContext);
    const myList = addedSpot.filter(spot => spot.user_email === users.email);
    return (
        <div className="bg-base-200 min-h-[calc(100vh-247px)]">
            <Helmet>
                <title>EuroGuide - My list</title>
            </Helmet>
            <div className="max-w-7xl mx-auto py-32 relative">
                <div className={`h-full w-[90%] blur-[140px]  rounded-full absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 ${theme === 'light' ? 'bg-neutral-300' : 'bg-neutral'}`}></div>
                {myList.length > 0 ? (
                    <div className="overflow-x-auto px-2">
                        <table className={`min-w-full divide-y ${theme === 'light' ? 'divide-gray-200' : 'divide-gray-600'} without_glassmorphism rounded-2xl`}>
                            <thead>
                                <tr>
                                    <th className="p-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country Name</th>
                                    <th className="p-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spot Name</th>
                                    <th className="p-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average Cost</th>
                                    <th className="p-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Season</th>
                                    <th className="p-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${theme === 'light' ? 'divide-gray-200' : 'divide-gray-600'}`}>
                                {myList.map(spot => (
                                    <tr key={spot._id}>
                                        <td className="p-6 whitespace-nowrap">{spot.country_Name}</td>
                                        <td className="p-6 whitespace-nowrap">{spot.tourists_spot_name}</td>
                                        <td className="p-6 whitespace-nowrap">$ {spot.average_cost}</td>
                                        <td className="p-6 whitespace-nowrap">{spot.seasonality}</td>
                                        <td className="p-6 flex gap-4 whitespace-nowrap">
                                            <Link to={'/update_spot'} className="text-white flex gap-1 items-center bg-neutral p-2 rounded-lg">Update<FaCloudUploadAlt className="text-lg" /></Link>
                                            <Link className="text-white flex gap-1 items-center bg-black p-2 rounded-lg" onClick={() => deleteSpot(spot._id)} >Delete<MdDelete className="text-lg" /></Link>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl uppercase font-bold title_font">No added tourist spots</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default My_list;
