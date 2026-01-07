import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";


export default function TierStorage() {
    return (
        <>
            {/* HERO IMAGE */}
            <section className="w-full">
                <img
                    src="/products/tier-hero.jpg"
                    alt="TierStorage"
                    className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
                />
            </section>

            {/* CONTENT */}
            <section className="px-6 lg:px-16 py-16">
                <div className="grid gap-12 lg:grid-cols-[1fr_3fr] max-w-7xl mx-auto">

                    {/* LEFT SIDEBAR */}
                    <aside className="space-y-4">
                        <h3 className="text-xl font-medium text-slate-800 mb-4">
                            Our Products
                        </h3>

                        {[
                            { label: "Slotted Angle Racks", link: "/products/slotted-angle-racks" },
                            { label: "Heavy Duty Pallet Racks", link: "/products/heavy-duty-pallet-racks" },
                            { label: "Mezzanine Floor / Loft", link: "/products/mezzanine-floor" },
                            { label: "Compactor / Mobile Racks", link: "/products/compactor-racks" },
                            { label: "2/3 Tier Storage Structure", to: "/products/tier-storage" },
                            { label: "Industrial Lockers", link: "/products/industrial-lockers" },
                        ].map((p, i) => (
                            <Link
                                key={i}
                                to={p.link}
                                className="block w-full text-left px-4 py-3 rounded-lg
                           border border-slate-300 text-slate-800
                           hover:bg-slate-800 hover:text-white
                           transition"
                            >
                                {p.label}
                            </Link>
                        ))}
                    </aside>

                    {/* RIGHT CONTENT */}
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-light text-blue-700">
                            2/3 Tier Storage Structures
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            This system provides you the systematic way of storage of the valued products of yours.
                            This storage systems is designed for the optimum use of space upto the ceiling. This system provides
                            you with 200% higher space available.These racks are designed with Higher heights provided with the
                            passages at the ground and the walkways at the height of 6' to 8' from the ground, along with the
                            staircase for operation.
                        </p>


                        {/* IMAGE CARDS */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {[
                                "/products/tier1.webp",
                                "/products/tier2.webp",

                            ].map((img, i) => (
                                <div
                                    key={i}
                                    className="overflow-hidden rounded-xl border border-slate-200"
                                >
                                    <img
                                        src={img}
                                        alt="Slotted Angle Rack"
                                        className="h-72 w-full object-cover
                               transition-transform duration-500
                               hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
            <FloatingCallButton />
        </>
    );
}

