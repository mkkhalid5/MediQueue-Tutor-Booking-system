import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 max-w-md">
          Sorry, the page you are looking for does not exist
          or has been moved.
        </p>
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default NotFound;