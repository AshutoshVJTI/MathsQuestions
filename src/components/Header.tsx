import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow">
      <div className="container">
        <h1 className="text-2xl font-bold">Math Questions</h1>
      </div>
    </header>
  );
};

export default Header;