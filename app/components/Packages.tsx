// components/Packages.tsx
import Image from 'next/image';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Premium packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/gym.jpg"
              alt="Health and Nutrition"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Health and Nutrition</h3>
            <p className="text-gray-700 mb-4">Details about Package 1.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/gym.jpg"
              alt="Computer Science Packages"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Computer Science Packages</h3>
            <p className="text-gray-700 mb-4">Details about Package 2.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/gym.jpg"
              alt="Mental Health and Wellness"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Mental Health and Wellness</h3>
            <p className="text-gray-700 mb-4">Mental health and wellness</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
