import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingCallButton from "../components/FloatingCallButton";


export default function MezzanineFloor() {
    return (
        <>
            {/* HERO IMAGE */}
            <section className="w-full">
                <img
                    src="/products/Mezzanine-hero.jpeg"
                    alt="Mezzanine Floor"
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
                            Mezzanine Floor / Loft
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            We offer installation of mezzanine floor,which is the smart way to make use of twice or
                            thrice the size of actual space. Versatile in nature, this can be altered anytime and without any material
                            loss. The mezzanine floor is also cost effective, asit costs much less than the construction of a building
                            & land.
                        </p>

                        <p className="mt-6 text-gray-600 text-lg max-w-3xl leading-relaxed">
                            Mezzanine floor is most widely used in all types of industries to optimize the storage capacity for
                            warehouse or offices. Our system can be installed in virtually any space from floor to ceiling. Our team of
                            mezzanine floor specialists work in close co-ordination with clients at all stages of projects, providing detail
                            design, construction, supply, installation and commissioning to meet their exact requirement.
                        </p>


                        {/* IMAGE CARDS */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            {[
                                "/products/Mezzanine1.jpg",
                                "/products/Mezzanine2.jpg",

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
