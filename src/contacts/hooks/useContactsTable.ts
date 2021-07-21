import { useState } from 'react';
import useSort from '../../common/hooks/useSort';
import { Contact } from '../model';

function useContactsTable() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [shownColumns, setShownColumns] = useState<(keyof Contact)[]>(['name', 'city', 'email', 'phone']);
  const sortProps = useSort('asc', 'name');

  function handleCheckColumn(prop: keyof Contact, checked: boolean) {
    if (checked) {
      setShownColumns((prev) => [...prev, prop]);
    } else {
      const newShownColumns = shownColumns.filter((x) => x !== prop);
      setShownColumns(newShownColumns);
    }
  }

  function handleRowSelect(id: string) {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  }

  return {
    selectedId,
    shownColumns,
    ...sortProps,
    handleCheckColumn,
    handleRowSelect,
  };
}

export default useContactsTable;
