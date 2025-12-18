export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue font-semibold text-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <p>
              <a href="#">About us</a>
            </p>
            <p>
              <a href="#">Contacts</a>
            </p>
            <p>
              <a href="#">Terms & Conditions</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
          </div>
          <div className="flex items-center">
            <p>&copy; Copyright {currentYear}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
