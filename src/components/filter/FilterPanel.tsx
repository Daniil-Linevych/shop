import React, { useState } from 'react';
import { FilterPanelProps } from '@/types/filters';

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFilterChange,
}) => {
  const [priceRange, setPriceRange] = useState([100, 20000]);
  const [showNewFirst, setShowNewFirst] = useState(false);

  const manufacturers = [
    'Apple',
    'Dell',
    'Asus',
    'HP',
    'Lenovo',
    'Microsoft',
    'Razer',
  ];

  const processors = [
    'Intel Core i9',
    'Intel Core i10',
    'Intel Core i11',
    'Intel Core i8',
    'Intel Core i7',
    'AMD Ryzen 3',
    'AMD Ryzen 4',
    'AMD Ryzen 5',
    'AMD Ryzen 6',
  ];

  const ramOptions = ['64 GB', '32 GB', '16 GB', '8 GB', '4 GB'];

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-bold">Manufacturer</h3>
        <div className="space-y-2">
          {manufacturers.map((manufacturer) => (
            <label
              key={manufacturer}
              className="flex cursor-pointer items-center"
            >
              <input
                type="checkbox"
                checked={filters.manufacturers?.includes(manufacturer)}
                onChange={(e) =>
                  onFilterChange(
                    'manufacturers',
                    manufacturer,
                    e.target.checked
                  )
                }
                className="h-4 w-4 rounded text-blue-900 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">{manufacturer}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-lg font-bold">Processor</h3>
        <div className="space-y-2">
          {processors.map((processor) => (
            <label key={processor} className="flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={filters.processors?.includes(processor)}
                onChange={(e) =>
                  onFilterChange('processors', processor, e.target.checked)
                }
                className="h-4 w-4 rounded text-blue-900 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">{processor}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-lg font-bold">RAM</h3>
        <div className="space-y-2">
          {ramOptions.map((ram) => (
            <label key={ram} className="flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={filters.ram?.includes(ram)}
                onChange={(e) => onFilterChange('ram', ram, e.target.checked)}
                className="h-4 w-4 rounded text-blue-900 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">{ram}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-lg font-bold">Price</h3>
        <div className="mb-3 flex gap-4">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-20 rounded border px-2 py-1 text-sm"
            placeholder="from"
          />
          <span className="self-center">to:</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-24 rounded border px-2 py-1 text-sm"
            placeholder="to"
          />
        </div>
        <input
          type="range"
          min="100"
          max="20000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
        <div className="mt-1 flex justify-between text-xs text-gray-500">
          <span>100</span>
          <span>20000</span>
        </div>
      </div>

      <div className="flex items-center">
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={showNewFirst}
            onChange={(e) => setShowNewFirst(e.target.checked)}
            className="peer sr-only"
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-900 peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          <span className="ml-3 text-sm font-medium">New products first</span>
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
