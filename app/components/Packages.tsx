import Image from 'next/image';
import Link from 'next/link';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Premium Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/nutrition.jpg"
              alt="Health and Nutrition"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Health and Nutrition</h3>
            <p className="text-gray-700 mb-4">Health and Nutrition guide e-books to help boost your health and immune system.</p>
            <Link href="/mental" className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center">
             Buy Package
            </Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/computer.jpg"
              alt="Computer Science Packages"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Computer Science Packages</h3>
            <p className="text-gray-700 mb-4">Get computer science courses and university-certified documentation that will help you pursue your learning career in computer science.</p>
            <Link href="/mental.tsx" className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center">
              Buy Package
            </Link>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <Image
              src="/mental.jpg"
              alt="Mental Health and Wellness"
              width={500}
              height={300}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">Mental Health and Wellness</h3>
            <p className="text-gray-700 mb-4">Mental health and wellness is a key factor in our daily life. We have e-books containing life hacks that will help you navigate through the journey.</p>
            <Link href="/mental.tsx" className="bg-blue-500 text-white px-4 py-2 rounded flex justify-center">
              Buy Package
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;

