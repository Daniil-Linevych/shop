import React, {useState} from 'react';
import {FilterPanelProps} from '@/types/filters'

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([100, 20000]);
  const [showNewFirst, setShowNewFirst] = useState(false);

  const manufacturers = [
    'Apple', 'Dell', 'Asus', 'HP', 'Lenovo', 'Microsoft', 'Razer'
  ];

  const processors = [
    'Intel Core i9', 'Intel Core i10', 'Intel Core i11', 'Intel Core i8',
    'Intel Core i7', 'AMD Ryzen 3', 'AMD Ryzen 4', 'AMD Ryzen 5', 'AMD Ryzen 6'
  ];

  const ramOptions = ['64 GB', '32 GB', '16 GB', '8 GB', '4 GB'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">Manufacturer</h3>
        <div className="space-y-2">
          {manufacturers.map((manufacturer) => (
            <label key={manufacturer} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.manufacturers?.includes(manufacturer)}
                onChange={(e) => onFilterChange('manufacturers', manufacturer, e.target.checked)}
                className="w-4 h-4 text-blue-900 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">{manufacturer}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">Processor</h3>
        <div className="space-y-2">
          {processors.map((processor) => (
            <label key={processor} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.processors?.includes(processor)}
                onChange={(e) => onFilterChange('processors', processor, e.target.checked)}
                className="w-4 h-4 text-blue-900 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">{processor}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">RAM</h3>
        <div className="space-y-2">
          {ramOptions.map((ram) => (
            <label key={ram} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.ram?.includes(ram)}
                onChange={(e) => onFilterChange('ram', ram, e.target.checked)}
                className="w-4 h-4 text-blue-900 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm">{ram}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg mb-3">Price</h3>
        <div className="flex gap-4 mb-3">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-20 px-2 py-1 border rounded text-sm"
            placeholder="from"
          />
          <span className="self-center">to:</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-24 px-2 py-1 border rounded text-sm"
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
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>100</span>
          <span>20000</span>
        </div>
      </div>

      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showNewFirst}
            onChange={(e) => setShowNewFirst(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-900"></div>
          <span className="ml-3 text-sm font-medium">New products first</span>
        </label>
      </div>
    </div>
  );
};

export default FilterPanel