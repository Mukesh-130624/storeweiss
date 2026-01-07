import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);           // desktop dropdown
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileProducts, setMobileProducts] = useState(false);
    const dropdownRef = useRef(null);

    // Close desktop dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-800 text-white shadow z-50">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

                {/* Logo */}
                <h1 className="text-2xl font-semibold tracking-wide">
                    STOREWEISS EQUIPMENTS
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-lg">

                    <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-400">About</Link></li>

                    {/* Desktop Products Dropdown */}
                    <li className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 hover:text-blue-400"
                        >
                            Products
                            <FiChevronDown
                                className={`transition-transform ${open ? "rotate-180" : ""}`}
                            />
                        </button>

                        {open && (
                            <ul className="absolute top-10 left-0 bg-white text-slate-800 rounded shadow-md w-64 py-2">
                                {productLinks.map(p => (
                                    <li key={p.to}>
                                        <Link
                                            to={p.to}
                                            className="block px-4 py-2 hover:bg-slate-100"
                                            onClick={() => setOpen(false)}
                                        >
                                            {p.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-slate-900 px-6 py-4 space-y-4 text-base">

                    <Link to="/" onClick={() => setMobileOpen(false)} className="block">
                        Home
                    </Link>

                    <Link to="/about" onClick={() => setMobileOpen(false)} className="block">
                        About
                    </Link>

                    {/* Mobile Accordion */}
                    <button
                        onClick={() => setMobileProducts(!mobileProducts)}
                        className="flex items-center justify-between w-full"
                    >
                        Products
                        <FiChevronDown
                            className={`transition-transform ${mobileProducts ? "rotate-180" : ""}`}
                        />
                    </button>

                    {mobileProducts && (
                        <div className="pl-4 space-y-2 text-sm">
                            {productLinks.map(p => (
                                <Link
                                    key={p.to}
                                    to={p.to}
                                    onClick={() => {
                                        setMobileOpen(false);
                                        setMobileProducts(false);
                                    }}
                                    className="block text-gray-300 hover:text-blue-400"
                                >
                                    {p.label}
                                </Link>
                            ))}
                        </div>
                    )}

                    <Link to="/contact" onClick={() => setMobileOpen(false)} className="block">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

const productLinks = [
    { label: "Slotted Angle Storage Racks", to: "/products/slotted-angle-racks" },
    { label: "Heavy Duty Pallet Racks", to: "/products/heavy-duty-pallet-racks" },
    { label: "Mezzanine Floor / Loft", to: "/products/mezzanine-floor" },
    { label: "Compactor / Mobile Racks", to: "/products/compactor-racks" },
    { label: "2/3 Tier Storage Structure", to: "/products/tier-storage" },
    { label: "Industrial Lockers", to: "/products/industrial-lockers" },
];
