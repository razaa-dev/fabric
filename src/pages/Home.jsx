import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut, faRuler, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Home() {
  const featuredProducts = [
    products[0],
    products[1],
    products[2],
    products[3]
  ];

  return (
    <div>
      <Carousel />

      {/* Products Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            Our Products
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                displayImage={
                  product.category === 'woven-fusible' 
                    ? '/ProductImages/woven1.jpg'
                    : product.category === 'nonwoven-microdot' 
                    ? '/ProductImages/thermal1.jpg'
                    : product.category === 'nonwoven-fabric' 
                    ? '/ProductImages/chemical1.jpg'
                    : product.category === 'pp-nonwoven' 
                    ? '/ProductImages/pp1.jpg'
                    : product.images[0]
                }
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-md hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-auto max-w-4xl" />

      
      
      {/* Services Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Die Cutting Services',
                icon: 'faCut',
                description: 'Specialized in precision die cutting for collar, cuff, band, skin and patch components.'
              },
              {
                title: 'Precision Slitting',
                icon: 'faRuler',
                description: 'Expert slitting services for placket, patti roll and trouser belt rolls with precise measurements.'
              },
              {
                title: 'Quality Testing',
                icon: 'faMagnifyingGlass',
                description: 'Comprehensive quality control and testing to ensure all products meet industry standards.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white group hover:bg-primary p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 border border-primary/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="text-primary group-hover:text-white text-4xl mb-6 transform group-hover:scale-110 transition-all duration-500">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-white mb-4 transform group-hover:-translate-y-1 transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transform group-hover:-translate-y-1 transition-all duration-500">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-md hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-auto max-w-4xl" />


      {/* About Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            About Us
          </motion.h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              With over 20 years of excellence, Hryday Enterprises delivers precision die cutting and slitting services for the garment industry. Our state-of-the-art facility and expert team ensure superior quality components for leading manufacturers.
            </p>
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-md hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-auto max-w-4xl" />

      {/* Contact Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-primary mb-12"
          >
            Contact Us
          </motion.h2>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Home;