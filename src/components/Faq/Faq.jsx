
const Faq = () => {
    return (
        <div className="bg-base-200 lg:pt-32 pt-20 pb-20 mx-1">
            <div className="max-w-7xl mx-auto flex flex-col gap-3 relative">
                <div className="h-32 w-3/4 bg-neutral-400 rounded-full absolute left-2/4 bottom-0  blur-[100px] -translate-x-2/4"></div>
                <div className="text-center pb-10 relative">
                    <h1 className="title_font text-4xl font-bold uppercase">Frequently Asked</h1>
                    <div className="border border-b-8 glassmorphism rounded-full w-1/4 absolute left-2/4 -translate-x-2/4 bottom-5 border-base-300"></div>
                </div>
                <div className="collapse collapse-plus bg-base-200 without_glassmorphism">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How do I plan my trip to Europe using your website?
                    </div>
                    <div className="collapse-content">
                        <p>Our website offers comprehensive destination guides, travel tips, and itinerary suggestions to help you plan your European adventure. Simply navigate to the destination of your choice and explore all the resources available!</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 without_glassmorphism">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I book accommodations and activities through your website?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can! Our website provides a booking platform where you can browse and book accommodations, tours, activities, and transportation options across Europe. We partner with trusted providers to ensure a seamless booking experience.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 without_glassmorphism">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Are there resources available for budget travelers?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! We understand that budget is an important factor for many travelers, so we offer a variety of resources tailored to budget-conscious explorers. From budget-friendly accommodation options to money-saving tips and tricks, we've got you covered</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200 without_glassmorphism">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer personalized trip planning services?
                    </div>
                    <div className="collapse-content">
                        <p>While we don't provide personalized trip planning services, our website offers a wealth of resources and tools to help you create your own custom itinerary. Feel free to explore our destination guides, travel blogs, and community forums for inspiration and advice from fellow travelers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;