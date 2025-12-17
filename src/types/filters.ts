export interface Filters {
  manufacturers?: string[];
  processors?: string[];
  ram?: string[];
  priceRange?: [number, number];
}

export interface FilterPanelProps {
  filters: Filters;
  onFilterChange: (filterType: keyof Filters, value: string, checked: boolean) => void;
}