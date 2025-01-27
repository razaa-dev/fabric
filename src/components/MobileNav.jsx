import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden ml-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-background p-2"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary shadow-lg"
          >
            <nav className="flex flex-col p-4">
              <Link 
                to="/" 
                className="py-2 text-background hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="py-2 text-background hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/services" 
                className="py-2 text-background hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="py-2 text-background hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="py-2 text-background hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav; 