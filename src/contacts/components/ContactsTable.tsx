import { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, makeStyles, TableContainer, LinearProgress, TableSortLabel } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { blueGrey } from '@material-ui/core/colors';
import HeaderCell from './HeaderCell';
import ContactCard from './ContactCard';
import { Contact, Order } from '../model';
import ContactActiveIcon from './ContactActiveIcon';
import useSort from '../../common/hooks/useSort';

function getComparatorByOrder(order: Order) {
  if (order === 'asc') {
    return (a: Contact, b: Contact) => a.name.localeCompare(b.name);
  } else if (order === 'desc') {
    return (a: Contact, b: Contact) => b.name.localeCompare(a.name);
  }

  throw Error('Wrong order specified.');
}

const useStyles = makeStyles(() => ({
  listIcon: {
    color: 'white',
  },
  row: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: blueGrey[50],
    },
  },
}));

interface Props {
  contacts: Contact[];
  loading: boolean;
}

function ContactsTable({ contacts, loading }: Props) {
  const { listIcon, row } = useStyles();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { order, orderBy, handleSort } = useSort('asc', 'name');

  return (
    <Box display="flex">
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === 'name' ? order : 'asc'}>
                <TableSortLabel active={orderBy === 'name'} direction={orderBy === 'name' ? order : 'asc'} onClick={() => handleSort('name')}>
                  <Typography color="textSecondary">Name</Typography>
                </TableSortLabel>
              </TableCell>
              <HeaderCell text="City" />
              <HeaderCell text="Email" />
              <HeaderCell text="Phone" align="right" />
              <TableCell align="right">
                <Box display="flex" alignItems="center" justifyContent="flex-end">
                  <ListIcon className={listIcon} />
                </Box>
              </TableCell>
            </TableRow>
            {loading && (
              <TableRow>
                <TableCell padding="none" colSpan={4}>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            )}
          </TableHead>
          <TableBody>
            {contacts.sort(getComparatorByOrder(order)).map((x) => (
              <TableRow key={x.id} className={row} onClick={() => setSelectedId(x.id)} selected={x.id === selectedId}>
                <TableCell>
                  <Typography>{x.name}</Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>{x.city}</Typography>
                    <ContactActiveIcon active={x.isActive} />
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography>{x.email}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>{x.phone}</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedId && <ContactCard contactId={selectedId} />}
    </Box>
  );
}

export default ContactsTable;
