import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import MobileNav from './MobileNav';

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const productCategories = [
    { 
      items: [
        { id: 1, name: 'Woven Fusible Interlining', category: 'woven-fusible' },
        { id: 2, name: 'Thermal Bond Nonwoven Microdot Fusible', category: 'nonwoven-microdot' },
        { id: 3, name: 'Chemical Bond Non Woven Fusible & Non Fusible Fabric', category: 'nonwoven-fabric' },
        { id: 4, name: 'Polypropylene Non Woven Fabric', category: 'pp-nonwoven' },
        { id: 5, name: 'Polyester Fusible Interlining', category: 'polyester-fusible' },
        { id: 6, name: 'PVC/PU Coated Fabric', category: 'coated-fabric' },
        { id: 7, name: 'Spunlace Nonwoven Fabric', category: 'spunlace' }
      ]
    }
  ];

  return (
    <header className="bg-primary text-background shadow-lg relative z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-1 -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10"
          >
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain -my-6" 
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-['Times_New_Roman'] font-semibold">Hryday Enterprises</span>
          </motion.div>

          <nav className="hidden md:flex space-x-6 font-primary">
            <Link to="/" className="text-background hover:text-secondary transition-colors duration-300">Home</Link>
            
            <div className="relative">
              <button
                className="text-background hover:text-secondary transition-colors duration-300 flex items-center"
                onMouseEnter={() => setIsProductsOpen(true)}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-64 bg-primary rounded-lg shadow-xl py-2"
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <div className="px-4 py-2">
                      {productCategories[0].items.map(product => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="block text-sm font-primary text-background hover:text-secondary hover:bg-primary-dark px-2 py-2 rounded transition-colors duration-300 my-1 border-b border-background/10 last:border-b-0"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            
            <Link to="/services" className="text-background hover:text-secondary transition-colors duration-300">Services</Link>
            <Link to="/about" className="text-background hover:text-secondary transition-colors duration-300">About Us</Link>
            <Link to="/contact" className="text-background hover:text-secondary transition-colors duration-300">Contact</Link>
          </nav>

          <MobileNav />

          {/* Desktop Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919769171415" className="text-secondary hover:text-secondary/80 transition-colors duration-300">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hrydayenterprises@gmail.com"
              className="text-secondary hover:text-secondary/80 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <div className="border-l border-background/20 h-6 mx-2"></div>
            <a 
              href="https://wa.me/+919769171415" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a 
              href="https://www.linkedin.com/company/105148537/admin/dashboard/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary hover:text-secondary/80 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;