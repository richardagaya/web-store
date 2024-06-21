// components/Packages.tsx
const Packages: React.FC = () => {
    return (
      <section id="packages" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Premium packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4  text-center">Health and Nutrition</h3>
              <p className="text-gray-700 mb-4">Details about Package 1.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center ">Computer science packages</h3>
              <p className="text-gray-700 mb-4">Details about Package 2.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-center">Mental health and wellness</h3>
              <p className="text-gray-700 mb-4">Mental health and wellness</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Packages;
  