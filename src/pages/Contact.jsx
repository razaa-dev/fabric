import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="py-16 bg-secondary-light min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-dark text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faPhone} className="text-primary text-lg mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+919769171415" className="text-gray-600 hover:text-primary">
                    +91 9769171415
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-lg mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Email</h3>
                  <div className="space-y-1">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=hrydayenterprises@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-primary"
                    >
                      hrydayenterprises@gmail.com
                    </a>
                    <div className="flex items-center">
                      
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=goyaljayesh@yahoo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 hover:text-primary"
                      >
                        goyaljayesh@yahoo.com 
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary text-lg mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    Shop No. 3, Lorik Yadav Premises,<br />
                    Santosh Nagar, Scout Camp Road,<br />
                    Off Link Rd, Behind Cafe City Corner,<br />
                    Behram Baug, Jogeshwari (West),<br />
                    Mumbai - 400102.
                  </p>
                  <div className="flex items-start -ml-8 mt-3">
                    <i className="ri-earth-fill text-primary text-lg "></i>
                    <div className="ml-4">
                      <a 
                        href="https://www.google.com/maps/place/Hryday+Enterprises/@19.145694,72.8350866,19.75z/data=!4m6!3m5!1s0x3be7b72f5dfd0ac7:0x1279c638a450b596!8m2!3d19.1455103!4d72.8352382!16s%2Fg%2F11kbz7h0j9?hl=en&entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors duration-300"
                      >
                        <span>View on Google Maps</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-6">
                <h3 className="font-medium mr-4">Connect with us:</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/+919769171415" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/105148537/admin/dashboard/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;