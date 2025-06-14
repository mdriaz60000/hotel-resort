import { FaFacebook, FaInstagram, FaTwitter, FaTripadvisor, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'Rooms & Suites', link: '/rooms' },
    { name: 'Dining', link: '/dining' },
    { name: 'Amenities', link: '/amenities' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Special Offers', link: '/offers' },
  ];

  const contactInfo = [
    { icon: <MdLocationOn className="text-xl" />, text: '123 Paradise Island, Maldives' },
    { icon: <MdPhone className="text-xl" />, text: '+960 123 4567' },
    { icon: <MdEmail className="text-xl" />, text: 'hello@luxuryresort.com' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', link: '#' },
    { icon: <FaInstagram />, name: 'Instagram', link: '#' },
    { icon: <FaTwitter />, name: 'Twitter', link: '#' },
    { icon: <FaTripadvisor />, name: 'TripAdvisor', link: '#' },
    { icon: <FaYoutube />, name: 'YouTube', link: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">DIVINE ECO RESORT</h2>
            <p className="mb-6">
              Experience unparalleled luxury and breathtaking views at our award-winning resort in the Maldives.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  aria-label={social.name}
                  className="bg-gray-800 hover:bg-amber-500 text-white p-3 rounded-full transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="hover:text-amber-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-400 mr-3 mt-1">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-6">
              Newsletter
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-800 text-white"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 px-4 rounded-r-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Divine Eco Resort. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-amber-400 transition duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-amber-400 transition duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-amber-400 transition duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;