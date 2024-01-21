import React from 'react';

const termsandconditions = () => {
    return (
        <div className="my-12 min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h1 className="text-4xl font-bold mb-4 text-center">Terms and Conditions</h1>
                    <p className="mb-4 text-center">This is a dummy terms and conditions page.</p>
                    <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                    <p className="mb-4">These terms and conditions outline the rules and regulations for the use of Our Website.</p>
                    <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
                    <p className="mb-4">By accessing this website we assume you accept these terms and conditions in full.</p>
                    <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>
                    <p className="mb-4">The information on this website is published for general information purposes only.</p>
                    <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
                    <p className="mb-4">While we strive to provide accurate information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability of the website or the information, products, services or related graphics contained within the website for any purpose.</p>
                    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                    <p className="mb-4">If you have any questions or concerns about these terms and conditions, please feel free to contact us at info@yourwebsite.com.</p>
                </div>
            </div>
        </div>
    );
};

export default termsandconditions;
