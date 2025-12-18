import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header className="bg-brand-blue text-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <button
              aria-label="Open menu"
              className="rounded-md p-2 transition-colors hover:bg-white/10 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="text-3xl" />
            </button>

            <a
              href="#"
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <img src="logo.png" className="h-1/2 w-1/2" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
