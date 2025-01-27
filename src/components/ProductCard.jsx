import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProductCard({ product, displayImage, className = '' }) {
  const fallbackImage = "/ProductImages";

  const handleImageError = (e) => {
    e.target.src = fallbackImage;
    e.target.onerror = null;
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full min-h-[400px] ${className}`}
    >
      <div className="relative h-48 flex-shrink-0">
        <img
          src={displayImage || product.images[0]}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow line-clamp-3">{product.shortDescription}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded hover:opacity-90 transition-all duration-300 w-full text-center"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;