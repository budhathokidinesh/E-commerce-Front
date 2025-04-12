import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCcPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10 w-full">
      <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6 px-6">
        {/* Logo / Store Name */}
        <div className="justify-center items-center text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">DNS Store</h2>
          <p className="text-sm text-gray-400">
            Your one-stop destination for the best deals and top quality
            products.
          </p>
        </div>

        {/* Quick Links */}
        <div className="justify-center items-center text-center">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/shop/home" className="hover:text-yellow-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-yellow-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="justify-center items-center text-center">
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Returns & Exchanges</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Social & Payment */}
        <div className="justify-center items-center text-center">
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4 mb-4 justify-center">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          </div>
          <h3 className="text-lg font-semibold mb-2">We Accept</h3>
          <div className="flex space-x-4 text-2xl justify-center">
            <FaCcPaypal />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Dinesh Budhathoki. All rights reserved.🚀
      </div>
    </footer>
  );
};

export default Footer;
