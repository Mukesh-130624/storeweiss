import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";


export default function CompactorRacks() {
    return (
        <>
            {/* HERO IMAGE */}
            <section className="w-full">
                <img
                    src="/products/compactor-hero.jpg"
                    alt="Compactor Racks"
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
                            { label: "2/3 Tier Storage Structure", link: "/products/tier-storage" },
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
                            Compactor / Mobile Racks
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            Compactor/Mobile racking Systems are unique and innovative method to increase the Floor Space
                            storage area by eliminating all un-wanted aisles,which are otherwise required between every rows of
                            conventional racking system.The entire unit moves on rails fixed onto the floor level and it's 100%
                            indigenously built state of the art manual driven Sprocket Chain drive mechanism ensures smooth
                            movement of these units in clockwise or anti-clockwise directions,thus creating the aisle space only for
                            the particular unit to be currently used for storage & retrieval.The compactors forms to be an entirely
                            closed units when brought together,ensuring dust free and extra hygienic storage conditions,which are
                            mandatory for Pharmacy Industries, Electronic Assembly line etc., as per GMP / FDA / MCA / ISO
                            standards.
                        </p>


                        {/* IMAGE CARDS */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {[
                                "/products/compactor1.jpg",
                                "/products/compactor2.jpg",

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
