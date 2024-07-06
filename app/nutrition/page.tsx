"use client"
import React, { useState } from 'react';
import CustomCheckoutForm from '../components/checkout';

const packages = [
  {
    id: 1,
    title: 'Silver Package',
    description: 'Access to 50 e-books and tutorials',
    price: 1000,
  },
  {
    id: 2,
    title: 'Gold Package',
    description: 'Access to 100 e-books and tutorials',
    price: 2000,
  },
  {
    id: 3,
    title: 'Platinum Package',
    description: 'Access to 200+ e-books and tutorials',
    price: 3000,
  },
];

const Packages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
  });
  const [alert, setAlert] = useState<{ type: 'success' | 'error' | null, message: string }>({
    type: null,
    message: '',
  });

  const handleQuantityChange = (packageId: number, delta: number) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[packageId] + delta;
      return {
        ...prevQuantities,
        [packageId]: newQuantity > 0 ? newQuantity : 1, 
      };
    });
  };

  const handleTransactionResult = (result: 'success' | 'error') => {
    if (result === 'success') {
      setAlert({ type: 'success', message: 'Transaction successful! Thank you for your purchase.' });
    } else {
      setAlert({ type: 'error', message: 'Transaction failed. Please try again.' });
    }

    setTimeout(() => {
      setAlert({ type: null, message: '' });
    }, 5000); 
  };

  const handleSelectPackage = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Choose Your Package</h2>
        {alert.type && (
          <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-error'} mb-4`}>
            {alert.message}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <p className="mb-4">{pkg.description}</p>
              <p className="text-xl font-bold mb-6">KES{pkg.price}</p>
              <div className="flex justify-center items-center mb-4">
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l"
                  onClick={() => handleQuantityChange(pkg.id, -1)}
                >
                  -
                </button>
                <span className="px-4">{quantities[pkg.id]}</span>
                <button
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r"
                  onClick={() => handleQuantityChange(pkg.id, 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleSelectPackage(pkg)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-4">Complete Your Payment</h3>
          <CustomCheckoutForm
            packageDetails={{ ...selectedPackage, quantity: quantities[selectedPackage.id] }}
            onTransactionResult={handleTransactionResult}
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;

