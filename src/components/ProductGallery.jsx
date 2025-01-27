import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ProductGallery({ images, defaultImage }) {
  const [selectedImage, setSelectedImage] = useState(defaultImage || images[0]);

  useEffect(() => {
    setSelectedImage(defaultImage || images[0]);
  }, [defaultImage, images]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-4 aspect-square rounded-lg overflow-hidden"
        >
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square rounded-lg overflow-hidden border-2 ${
              selectedImage === image ? 'border-primary' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;