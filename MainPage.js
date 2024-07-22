import React from 'react';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="bg-white p-4 rounded shadow-md mb-8">
        <div className="flex items-center">
          <img src="couplelogo.png" alt="Profile Picture" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h1 className="text-2xl font-bold">Troi & Reginald</h1>
            <p className="text-gray-600">#NewlyNelsons</p>
          </div>
        </div>
      </header>

      <nav className="bg-white p-4 rounded shadow-md mb-8">
        <button className="px-4 py-2 text-blue-500">Feed</button>
        <button className="px-4 py-2 text-gray-600">Table Numbers</button>
        <button className="px-4 py-2 text-gray-600">Weather</button>
        <button className="px-4 py-2 text-gray-600">Details</button>
        <button className="px-4 py-2 text-gray-600">Gallery</button>
      </nav>

      <main>
        {/* Add your content sections here */}
      </main>
    </div>
  );
};

export default MainPage;
