import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const productCategories = [
    { title: 'Woven Fusible Interlining', path: '/product/1' },
    { title: 'Thermal Bond Nonwoven', path: '/product/2' },
    { title: 'Chemical Bond Non Woven', path: '/product/3' },
    { title: 'Polypropylene Non Woven Fabric', path: '/product/4' },
    { title: 'Polyester Fusible', path: '/product/5' },
    { title: 'PVC/PU Coated Fabric', path: '/product/6' },
    { title: 'Spunlace Nonwoven', path: '/product/7' }
  ];

  return (
    <footer className="bg-primary text-background font-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <a href="tel:+919769171415" className="hover:text-secondary/90 transition">
                  +91 9769171415
                </a>
              </p>
              <p>
                
                <div className="pt-2">
                  <div className="flex items-start">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    <div>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=hrydayenterprises@gmail.com"
                        className="hover:text-secondary/90 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        hrydayenterprises@gmail.com 
                      </a>
                      <div className="mt-1">
                        <a 
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=goyaljayesh@yahoo.com"
                          className="hover:text-secondary/90 transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          goyaljayesh@yahoo.com 
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
              <p className="pt-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Shop No. 3, Lorik Yadav Premises,<br/>
                Santosh Nagar, Scout Camp Road,<br/>
                Off Link Rd, Behind Cafe City Corner,<br/>
                Behram Baug, Jogeshwari (West),<br/>
                Mumbai - 400102.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary/90 transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary/90 transition">Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary/90 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary/90 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={category.path}
                    className="hover:text-secondary/90 transition"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+919769171415" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-colors duration-300 text-2xl"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a 
                href="https://www.linkedin.com/company/105148537/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-secondary transition-colors duration-300 text-2xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary/20 text-center">
          <p className="font-primary">&copy; {new Date().getFullYear()} Hryday Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;