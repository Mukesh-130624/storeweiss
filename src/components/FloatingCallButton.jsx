import { FiPhoneCall } from "react-icons/fi";

export default function FloatingCallButton() {
    return (
        <a
            href="tel:+919822188194"
            className="
        fixed bottom-6 right-6
        z-50
        flex items-center gap-2
        bg-green-600 text-white
        px-4 py-3
        rounded-full
        shadow-lg
        hover:bg-green-700
        hover:scale-105
        transition-all duration-300
      "
            aria-label="Call Storeweiss Equipments"
        >
            <FiPhoneCall className="text-xl animate-pulse" />
            <span className="hidden sm:inline font-medium">
                Call Us
            </span>
        </a>
    );
}
