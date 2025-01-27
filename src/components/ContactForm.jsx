import { useState } from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzrqtrLvPqW4qBYysZnv32_3aNrUiDrWFKQeK_97YJlYr05_wCXObdwYOMLnKyszYqaJA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        productInterest: '',
        description: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Unable to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-red-500"
        >
          <h3 className="text-xl">Thank you for contacting us!</h3>
          <p>We will get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'phone', 'productInterest', 'description'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <label className="block text-gray-700 mb-2 capitalize">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              {field !== 'description' ? (
                field === 'productInterest' ? (
                  <select
                    name={field}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary-dark focus:shadow-lg transition-all hover:border-primary-dark focus:border-primary-dark"
                    value={formData[field]}
                    onChange={handleChange}
                  >
                    <option value="">Select a product</option>
                    <option value="Woven Fusible Interlining">Woven Fusible Interlining</option>
                    <option value="Thermal Bond Nonwoven Microdot Fusible">Thermal Bond Nonwoven Microdot Fusible</option>
                    <option value="Chemical Bond Non Woven Fusible & Non Fusible Fabric">Chemical Bond Non Woven Fusible & Non Fusible Fabric</option>
                    <option value="Polypropelene Non Woven Fabric">Polypropelene Non Woven Fabric</option>
                    <option value="Polyester Fusible Interlining">Polyester Fusible Interlining</option>
                    <option value="PVC/PU Coated Fabric">PVC/PU Coated Fabric</option>
                    <option value="Spunlace Nonwoven Fabric">Spunlace Nonwoven Fabric</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-lg transition-all"
                    value={formData[field]}
                    onChange={handleChange}
                  />
                )
              ) : (
                <textarea
                  name={field}
                  required
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-lg transition-all"
                  value={formData[field]}
                  onChange={handleChange}
                />
              )}
            </motion.div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Submit
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}

export default ContactForm;

