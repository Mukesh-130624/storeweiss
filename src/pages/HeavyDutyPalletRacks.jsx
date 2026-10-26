import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";


export default function HeavyDutyPalletRacks() {
    return (
        <>
            {/* HERO IMAGE */}
            <section className="w-full">
                <img
                    src="/products/heavy-duty-hero.avif"
                    alt="Heavy Duty Pallet Racks"
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
                            Heavy Duty Pallet Racks
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            Heavy Duty Palletstacking racks designed fromthe prime quality steel in various intricate formsfortheir
                            usage in storage systems.These racks are designed by the verticals and the horizontalsections only,towith
                            standthe pallets accommodating the loadsfrom500Kgs.- 3000Kgs. Per loading levels. The racks are designed
                            in various sizes, depending upon the space requirement.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            FEATURES:<br />
                            Comprises of two frameworks one vertical and other horizontal.<br />
                            UsedforstoringRawmaterials and Finished goods atthestores and Godowns.<br />
                            Available in all required sizes.<br />
                            Can bear the U.D.L. load capacity of 0.5Tons - 3 Tons per loading levels.<br />
                        </p>


                        {/* IMAGE CARDS */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {[
                                "/products/heavy1.jpg",
                                "/products/heavy2.webp",

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
