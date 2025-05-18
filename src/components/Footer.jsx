import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 to-blue-100 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo & About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-purple-700">
              GCC Language Club
            </h3>
            <p className="text-gray-600 mt-2 max-w-xs mx-auto md:mx-0">
              The GCC Language Club is dedicated to helping you learn and
              explore new languages in a fun and engaging environment.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-0">
            <div>
              <h4 className="text-lg font-semibold text-purple-700">
                Quick Links
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-purple-700 transition duration-200"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/aboutus"
                    className="text-gray-700 hover:text-purple-700 transition duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="text-gray-700 hover:text-purple-700 transition duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-purple-700">
                Resources
              </h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-purple-700 transition duration-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-purple-700 transition duration-200"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-purple-700 transition duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-purple-700 transition duration-200"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center mt-6 md:mt-0">
            <h4 className="text-lg font-semibold text-purple-700">Follow Us</h4>
            <div className="mt-4 flex justify-center gap-4">
              {/* Facebook */}
              <Link href="#" target="" rel="noopener noreferrer">
                <FaFacebook className="text-purple-700 hover:text-purple-600 text-2xl transition duration-200" />
              </Link>

              {/* Twitter */}
              <Link href="#" target="" rel="noopener noreferrer">
                <FaTwitter className="text-purple-700 hover:text-purple-600 text-2xl transition duration-200" />
              </Link>

              {/* Instagram */}
              <Link href="#" target="" rel="noopener noreferrer">
                <FaInstagram className="text-purple-700 hover:text-purple-600 text-2xl transition duration-200" />
              </Link>

              {/* LinkedIn */}
              <Link href="#" target="" rel="noopener noreferrer">
                <FaLinkedin className="text-purple-700 hover:text-purple-600 text-2xl transition duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-purple-700 py-4 mt-8 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} GCC Language Club. All rights
          reserved.
        </p>
        <p className="mt-2 text-sm">
          Developed by:
          <a
            href="https://wa.me/8801328991754"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white underline hover:text-purple-300 transition duration-200 ml-2"
          >
            Jubayer Hossain
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
