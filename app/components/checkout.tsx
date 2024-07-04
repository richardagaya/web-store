import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';

interface CustomCheckoutFormProps {
  packageDetails: any;
  onTransactionResult: (result: 'success' | 'error') => void;
}

const CustomCheckoutForm: React.FC<CustomCheckoutFormProps> = ({ packageDetails, onTransactionResult }) => {
  const publicKey = 'pk_live_d2a8fb6ebe079ed460f8cff594cef5c7af20a3a9'; 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const componentProps = {
    email,
    amount: packageDetails.price * packageDetails.quantity * 100,
    publicKey,
    text: 'Pay Now',
    currency: 'KES',
    onSuccess: () => {
      onTransactionResult('success');
    },
    onClose: () => {
      onTransactionResult('error');
    },
    metadata: {
      custom_fields: [
        {
          display_name: 'Name',
          variable_name: 'name',
          value: name,
        },
        {
          display_name: 'Phone',
          variable_name: 'phone',
          value: phone,
        },
      ],
    },
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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



