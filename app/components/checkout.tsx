import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

const CustomCheckoutForm: React.FC<{ packageDetails: any }> = ({ packageDetails }) => {
  const publicKey = 'pk_live_989a59f7ea25d0617abff69b4fbe0eea77f9daf5'; // Replace with your Paystack public key
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const componentProps = {
    email,
    amount: packageDetails.price * 100, // Convert to kobo
    publicKey,
    text: 'Pay Now',
    currency: 'KES', // Set currency to USD
    onSuccess: () => alert('Payment Successful'),
    onClose: () => alert('Payment Closed'),
    metadata: {
      name,
      phone,
    },
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Additional validation can be done here
    // The PaystackButton handles the actual payment processing
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block text-left">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-left">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block text-left">Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <PaystackButton {...componentProps} className="w-full px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300" />
    </form>
  );
};

export default CustomCheckoutForm;
