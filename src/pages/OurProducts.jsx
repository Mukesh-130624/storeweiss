import { Link } from "react-router-dom";

const products = [
    {
        title: "Slotted Angle Storage Racks",
        img: "/products/slotted-angle.jpg",
        link: "/products/slotted-angle-racks",
    },
    {
        title: "Heavy Duty Pallet Racks",
        img: "/products/heavy-pallet.jpg",
        link: "/products/heavy-duty-pallet-racks",
    },
    {
        title: "Mezzanine Floor / Loft",
        img: "/products/mezzanine.jpg",
        link: "/products/mezzanine-floor",
    },
];

export default function OurProducts() {
    return (
        <section className="py-12 px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl text-center font-light text-blue-700">
                    Our Products
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600 text-lg">
                    Explore Storeweiss Equipments' warehouse racking and industrial
                    storage solutions, including slotted angle racks, heavy-duty pallet
                    racks, and mezzanine floors. Designed to improve space utilization,
                    safety, and operational efficiency.
                </p>

                {/* Product Cards */}
                <div className="grid md:grid-cols-3 gap-12 mt-16">
                    {products.map((p) => (
                        <div
                            key={p.link}
                            className="border border-slate-200 rounded-xl overflow-hidden
                         transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={p.img}
                                    alt={`${p.title} for warehouse storage`}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-72 w-full object-cover
                             transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-slate-800">
                                    {p.title}
                                </h3>

                                <Link
                                    to={p.link}
                                    className="inline-block mt-6 px-6 py-2
                             border border-blue-600 text-blue-600 rounded-full
                             transition-all duration-300
                             hover:bg-blue-600 hover:text-white"
                                >
                                    Explore {p.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
