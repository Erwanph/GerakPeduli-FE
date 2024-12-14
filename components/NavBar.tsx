// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="shadow-md fixed top-0 left-0 w-full bg-gradient-to-r from-green-600 to-green-900 text-white z-50">
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          GerakPeduli
        </Link>
        <div className="flex items-center space-x-5">
          <ul className="flex space-x-3">
            <li><Link href="/" className="font-bold hover:bg-white hover:text-green-600 px-3 py-2 rounded">Home</Link></li>
            <li><Link href="/datagathering" className="font-bold hover:bg-white hover:text-green-600 px-3 py-2 rounded">Data Gathering</Link></li>
            <li><Link href="/monitoring" className="font-bold hover:bg-white hover:text-green-600 px-3 py-2 rounded">Monitoring</Link></li>
          </ul>
          <div>
          <Link href="/login" className="font-bold bg-green-500 hover:bg-white hover:text-green-600 px-4 py-2 rounded">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;