import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faHandshake, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons';

function About() {
  const stats = [
    { label: 'Years of Experience', value: '20+', icon: faAward },
    { label: 'Cities Served', value: '10+', icon: faUsers },
    { label: 'Product Types', value: '50+', icon: faLightbulb },
    { label: 'Happy Clients', value: '100+', icon: faHandshake }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-light to-white">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            Leading manufacturer and supplier of premium interlining solutions since 2007
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <FadeInWhenVisible>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-semibold text-primary-dark mb-6">Our Story</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      Established in 2007 by Mr. Jayesh Goyal, Hryday Enterprises has grown into a trusted name in the industry. Our dedicated team is committed to delivering high-quality, personalized services, fostering enduring partnerships with our clients.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      We pride ourselves on making each interaction meaningful and results-driven. With a foundation built on trust, integrity, and innovation, Hryday Enterprises consistently provides tailored solutions that exceed expectations, positioning us as a dependable partner in our clients' success.
                    </p>
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] w-full">
                    <img 
                      src="/about.png.jpg" 
                      alt="About Us" 
                      className="w-full h-full object-contain md:object-cover hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <FadeInWhenVisible key={stat.label} delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="text-5xl text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <h3 className="text-3xl font-bold text-primary-dark mb-3">{stat.value}</h3>
                <p className="text-gray-600 font-medium text-lg tracking-wider">{stat.label}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;