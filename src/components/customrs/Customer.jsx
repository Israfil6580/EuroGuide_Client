import { useContext } from "react";
import { OwnContext } from "../../context/ContextComponents";

const Customer = () => {
    const { reviews } = useContext(OwnContext)
    return (
        <div className="bg-base-200 lg:pt-32 pt-20 mx-1" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <div className="text-center pb-10 relative">
                    <h1 className="title_font lg:text-6xl text-4xl font-bold uppercase">Customers</h1>
                    <div className="border border-b-8 glassmorphism rounded-full w-1/4 absolute left-2/4 -translate-x-2/4 bottom-5 border-base-300"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 items-start relative">
                    <div className="h-32 w-32 bg-neutral rounded-full absolute -right-10 top-0"></div>
                    <div className="h-60 w-3/4 bg-neutral-400 rounded-full absolute left-2/4 top-1/4 blur-3xl -translate-x-2/4"></div>
                    {
                        reviews.map(review => {
                            return (
                                <div key={review._id} className="p-8 rounded-2xl without_glassmorphism">
                                    <div className="flex gap-4">
                                        <img className="w-12 h-12 object-cover rounded-full" src={review.image} alt="user avatar" width="400" height="400" loading="lazy" />
                                        <div>
                                            <h6 className="text-lg font-medium ">{review.name}</h6>
                                            <p className="text-sm">{review.profession}</p>
                                        </div>
                                    </div>
                                    <p className="mt-8">{review.review}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
};

export default Customer;
