import { useState } from 'react';
import { Order } from '../../contacts/model';

function useSort<T>(initialOrder: Order, initialOrderBy: keyof T) {
  const [order, setOrder] = useState<Order>(initialOrder);
  const [orderBy, setOrderBy] = useState<keyof T>(initialOrderBy);

  const handleSort = (prop: keyof T) => {
    const isAsc = orderBy === prop && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(prop);
  };

  return {
    order,
    orderBy,
    handleSort,
  };
}

export default useSort;
