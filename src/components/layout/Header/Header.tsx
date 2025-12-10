import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {

  return (
    <header className="bg-brand-blue text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          <div className="flex items-center gap-4">
            <button
              aria-label="Open menu"
              className="p-2 rounded-md hover:bg-white/10 focus:outline-none transition-colors"
            >
              <FontAwesomeIcon icon={faBars} className="text-3xl" />
            </button>

            <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img src='logo.png' className="w-1/2 h-1/2"/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}