// components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Who are we</h2>
                <p className="text-lg text-center mx-auto max-w-prose">
                    We provide professional, compiled e-books and resources to assist you in your everyday learning. Our curated content is available in our premium pro packages, which include:
                </p>
                <ul className="text-lg text-center mx-auto max-w-prose list-disc list-inside mt-4">
                    <li>Gym workout and meal plans</li>
                    <li>Programming tutorials and books</li>
                    <li>Computer science course books</li>
                    <li>Mental wellness e-books</li>
                    <li>Nutrition guide e-books</li>
                </ul>
                <p className="text-lg text-center mx-auto max-w-prose mt-8">
                    Our mission is to empower individuals by providing accessible and high-quality resources that enhance their knowledge and skills. Whether you are looking to improve your physical fitness, learn new programming languages, or boost your mental wellness, we have the resources you need to succeed.
                </p>
                <p className="text-lg text-center mx-auto max-w-prose mt-4">
                    Join our community today and take the first step towards a brighter, more knowledgeable future. We are committed to supporting you on your learning journey with our comprehensive and expertly curated content.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
