export default function WhyChooseUs() {
    const items = [
        {
            title: "Expert Team",
            desc: "Dedicated professionals with deep industry knowledge",
            img: "/why1.jpg",
        },
        {
            title: "Cutting Edge Technology",
            desc: "Modern systems to streamline warehouse operations",
            img: "/why2.jpg",
        },
        {
            title: "Optimized Solutions",
            desc: "Customized layouts to maximize storage efficiency",
            img: "/why3.jpg",
        },
    ];


    return (
        <section className="bg-blue-50 py-12 px-6 lg:px-16">
            <h2 className="text-4xl text-center font-light text-blue-700 mb-10">
                Why Choose Us
            </h2>


            <div className="grid md:grid-cols-3 gap-12">
                {items.map((i, idx) => (
                    <div key={idx} className="space-y-4">

                        {/* Image Wrapper */}
                        <div className="overflow-hidden rounded-lg">
                            <img
                                src={i.img}
                                alt={i.title}
                                className="h-96 w-full object-cover 
                     transition-transform duration-500 
                     hover:scale-110"
                            />
                        </div>

                        <h3 className="text-xl text-blue-700 font-medium">
                            {i.title}
                        </h3>
                        <p className="text-gray-600">
                            {i.desc}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}
