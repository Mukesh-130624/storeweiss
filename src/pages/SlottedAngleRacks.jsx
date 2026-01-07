import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";

export default function SlottedAngleRacks() {
    return (
        <>
            {/* HERO IMAGE */}
            <section className="w-full">
                <img
                    src="/products/slotted-angle-hero.jpg"
                    alt="Slotted Angle Storage Racks"
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
                            Slotted Angle Storage Racks
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            Slotted Angle Racks designed from the Vertical Angles & Horizontal Shelves along with
                            the accessories made from the prime quality steel to tackle today’s modern storage systems.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            The designed Slotted Angle Racks are flexible in nature and can be adjusted in any form.
                            The Racks are designed with three side open, three sides closed, along with the centre partitions.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            FEATURES:<br />
                            Comprises of 4 vertical slotted angle and shelves affixed with Nuts & Bolts.<br />
                            Used for storage purpose in offices, factories, godowns etc.<br />
                            Shelves can be easily adjusted according to the means ofstorage.<br />
                            Available in all required sizes.<br />
                            Can bear the U.D.L. load capacity ranging from 30Kgs. to 500Kgs per loading level.<br />
                        </p>


                        {/* IMAGE CARDS */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                            {[
                                "/products/slotted1.jpg",
                                "/products/slotted2.jpg",
                                "/products/slotted3.jpg",
                                "/products/slotted4.jpg",
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
