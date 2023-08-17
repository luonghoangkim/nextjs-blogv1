import Link from 'next/link';
import React from 'react';

interface TopSearchProps {
  searches: string[];
}

const TopSearch = ({ searches }: TopSearchProps) => {
  return (
    <div className="mt-5 mb-5 sticky top-0 z-50 pt-10">
      <p className="bg-black text-white text-center p-3 font-bold">Tìm kiếm hàng đầu</p>
      <nav>
        <ul>
          {searches.map((search, index) => (
            <li key={index} className="py-2 px-4 hover:bg-gray-200 hover:text-blue-700">
              <Link href={'/'}> - {search}</Link>  
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TopSearch;
