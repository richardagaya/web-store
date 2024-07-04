import React, { useState } from 'react';
import CustomCheckoutForm from './checkout';

const packages = [
  {
    id: 1,
    title: 'Basic Package',
    description: 'Access to 50 e-books and tutorials',
    price: 1000,
  },
  {
    id: 2,
    title: 'Standard Package',
    description: 'Access to 100 e-books and tutorials',
    price: 2000, 
  },
  {
    id: 3,
    title: 'Premium Package',
    description: 'Access to 200+ e-books and tutorials',
    price: 3000,
  },
];

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Choose Your Package</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <p className="mb-4">{pkg.description}</p>
              <p className="text-xl font-bold mb-6">₦{pkg.price}</p>
              <button
                onClick={() => setSelectedPackage(pkg)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-4">Complete Your Payment</h3>
          <CustomCheckoutForm packageDetails={selectedPackage} onTransactionResult={function (result: 'success' | 'error'): void {
            throw new Error('Function not implemented.');
          } } />
        </div>
      </div>
    </section>
  );
};

export default Packages;
