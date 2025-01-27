import { motion } from 'framer-motion';

function ProductSpecifications({ specifications }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-primary-dark mb-4">Specifications</h3>
      <div className="grid grid-cols-1 gap-3">
        {specifications.map((spec, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-primary/10 pb-2">
            <span className="text-gray-600 font-medium min-w-[140px]">{spec.label}:</span>
            <span className="text-gray-800 sm:text-right">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSpecifications;