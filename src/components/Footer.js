import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Mendel Minkowicz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


