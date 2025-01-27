import { motion } from 'framer-motion';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCut,
  faRuler,
  faIndustry,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const mainServices = [
    {
      icon: faCut,
      title: 'Die Cutting Services',
      description: 'Specialized in precision die cutting for garment components',
      features: [
        'Collars',
        'Cuffs',
        'Band',
        'Skin',
        'Patches'
      ]
    },
    {
      icon: faRuler,
      title: 'Slitting Services',
      description: 'Expert slitting services for garment manufacturing',
      features: [
        'Plackets',
        'Patti rolls',
        'Trouser belt rolls',
        'Custom width options',
        'Precise measurements'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto text-gray-100"
          >
            Specialized cutting and slitting solutions for the garment industry
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, index) => (
              <FadeInWhenVisible key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-lg p-10 hover:shadow-xl border border-gray-100 group hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 hover:text-primary transition-colors duration-300">
                        <FontAwesomeIcon 
                          icon={faCheckCircle} 
                          className="text-primary mr-3 text-base flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-primary-dark">Manufacturing Excellence</h2>
          <div className="max-w-4xl mx-auto">
            <FadeInWhenVisible delay={0.2}>
              <div
                className="bg-white rounded-lg shadow-lg p-10 hover:shadow-xl border border-gray-100 group hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faIndustry} />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  State-of-the-Art Facility
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our modern manufacturing facility is equipped with the latest technology to ensure precise cutting and slitting for all garment components.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    'Advanced Die Cutting Machines',
                    'Precision Slitting Equipment',
                    'Quality Control Systems',
                    'Modern Production Lines'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 hover:text-primary transition-colors duration-300">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-primary mr-3 text-base flex-shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;