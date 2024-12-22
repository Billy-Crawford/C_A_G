"use client";

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/type';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState(manufacturer || '');

  const filteredManufacturers = 
    query === '' 
    ? manufacturers 
    : manufacturers.filter((item) => {
      // Assurez-vous que `item` et `query` sont des chaînes avant d'appeler `toLowerCase`
      if (item && query) {
        return item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
      }
      return false;
    });

  const handleChange = (value: string) => {
    setManufacturer(value);
    setQuery(value);
  };

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={handleChange}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="logo voiture"
            />
          </Combobox.Button>

          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition 
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== '' ? (
                <Combobox.Option 
                  value={query}
                  className="search-manufacturer__option">
                  No results found
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option 
                    key={item}
                    value={item}
                    className={({ active }) => `search-manufacturer__option ${active ? 'bg-blue-500 text-white' : 'text-gray-900'}`}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {item}
                        </span>
                        {selected && (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                          >
                            {/* Add an icon or any other element here if needed */}
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacturer;
