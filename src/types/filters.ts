export interface IFilters {
  manufacturers?: string[];
  processors?: string[];
  ram?: string[];
  priceRange?: [number, number];
}

export interface IFilterPanelProps {
  filters: IFilters;
  onFilterChange: (
    filterType: keyof IFilters,
    value: string,
    checked: boolean
  ) => void;
}
