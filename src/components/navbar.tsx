import Image from 'next/image';
import Logo from '../../public/logo-caixa.png';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image src={Logo.src} alt="Logo" width={50} height={50} />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-200 transition duration-200">Início</a>
            </li>
            <li>
              <a href="/megasena" className="text-white hover:text-gray-200 transition duration-200">Megasena</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
