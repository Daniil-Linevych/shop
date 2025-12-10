export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-blue text-white font-semibold">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex items-center justify-between h-20 px-4">
                <div className="flex items-center gap-4">
                    <p><a href="#">About us</a></p>
                    <p><a href="#">Contacts</a></p>
                    <p><a href="#">Terms & Conditions</a></p>
                    <p><a href="#">Privacy Policy</a></p>
                </div>
                <div className="flex items-center">
                    <p>&copy; Copyright {currentYear}. All rights reserved.</p>
                </div>
                </div>
            </div>
        </footer>
    );
}