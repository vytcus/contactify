import { useState } from 'react';

function useFilter<T>(initialValues: T) {
  const [filter, setFilter] = useState<T>(initialValues);

  function onFilter<K extends keyof T>(key: K, value: T[K]) {
    setFilter((prev) => ({ ...prev, [key]: value }));
  }

  return {
    filter,
    onFilter,
  };
}

export default useFilter;
