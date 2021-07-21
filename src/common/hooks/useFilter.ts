import { useState } from 'react';

function useFilter<T>(initialValues: T) {
  const [filter, setFilter] = useState<T>(initialValues);

  function handleFilterChange<K extends keyof T>(key: K, value: T[K]) {
    setFilter((prev) => ({ ...prev, [key]: value }));
  }

  return {
    filter,
    handleFilterChange,
  };
}

export default useFilter;
