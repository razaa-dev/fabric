import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductGallery from '../components/ProductGallery';
import ProductSpecifications from '../components/ProductSpecifications';
import ContactForm from '../components/ContactForm';
import { useState, useEffect } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.images[0]);

  // Reset selected image when product changes
  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
    }
  }, [product]); // Dependency on product ensures this runs when product changes

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  return (
    <div className="py-16 bg-secondary-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-primary-dark mb-8">{product.name}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductGallery 
              images={product.images} 
              defaultImage={selectedImage}
              key={product.id} // Force remount of gallery when product changes
            />
            
            <div>
              <div className="prose max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-primary-dark mb-4">Description</h2>
                <p className="whitespace-pre-line">{product.description}</p>
              </div>
              
              <div className="bg-secondary text-primary p-6 rounded-lg shadow-lg border border-primary/10">
                <ProductSpecifications specifications={product.specifications} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary-dark text-center mb-8">
            Interested in this product?
          </h2>
          <ContactForm preselectedProduct={product.category} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;