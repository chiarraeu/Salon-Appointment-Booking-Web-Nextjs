'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {
  const [categoryList, setCategoryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then(resp => {
      console.log('Categories:', resp.data.data);
      setCategoryList(resp.data.data);
    });
  };

  // Live search филтриране
  const filteredCategories = categoryList.filter((item) =>
    item?.Name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-2'>
      <h2 className='font-bold text-4xl tracking-wide'>
        Search <span className='text-primary'>Doctors</span>
      </h2>
      <h2 className='text-gray-500 text-xl'>
        Search Your Doctor and Book Appointment in one click
      </h2>

      {/* Search input */}
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit">
          <Search className='h-4 w-4 mr-2' />
          Search
        </Button>
      </div>

      {/* Categories */}
      <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>
        {filteredCategories.length > 0 ? (
          filteredCategories.slice(0, 6).map((item, index) => (
            <Link
              href={`/search/${item.Name}`}
              key={index}
              className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out'
            >
              <Image
                src={`http://localhost:1337${item.Icon?.formats?.thumbnail?.url || item.Icon?.url}`}
                alt={item.Name}
                width={40}
                height={40}
              />
              <label className='text-blue-600 text-sm'>{item.Name}</label>
            </Link>
          ))
        ) : (
          // Loading skeletons
          [1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className='bg-slate-200 m-2 w-[130px] h-[120px] rounded-lg animate-pulse'
            />
          ))
        )}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default CategorySearch;

=======
export default CategorySearch
>>>>>>> 420c89f7e65cbda6b66c904f87d0deadcaae927c
