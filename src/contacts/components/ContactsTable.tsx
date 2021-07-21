import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, makeStyles, TableContainer, LinearProgress, TableSortLabel } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import HeaderCell from './HeaderCell';
import ContactCard from './ContactCard';
import { Contact, Order } from '../model';
import ContactActiveIcon from './ContactActiveIcon';
import ShowHideColumnCell from './ShowHideColumnCell';
import useContactsTable from '../hooks/useContactsTable';

function getComparatorByOrder(order: Order) {
  if (order === 'asc') {
    return (a: Contact, b: Contact) => a.name.localeCompare(b.name);
  } else if (order === 'desc') {
    return (a: Contact, b: Contact) => b.name.localeCompare(a.name);
  }

  throw Error('Wrong order specified.');
}

const useStyles = makeStyles(() => ({
  row: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: blueGrey[50],
    },
  },
  smallCell: {
    width: '20%',
  },
  largeCell: {
    width: '30%',
  },
}));

interface Props {
  contacts: Contact[];
  loading: boolean;
}

function ContactsTable({ contacts, loading }: Props) {
  const { row, smallCell, largeCell } = useStyles();
  const { selectedId, shownColumns, order, orderBy, handleSort, handleRowSelect, handleCheckColumn } = useContactsTable();

  return (
    <Box display="flex">
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow>
              {shownColumns.includes('name') && (
                <TableCell sortDirection={orderBy === 'name' ? order : 'asc'} className={smallCell}>
                  <TableSortLabel active={orderBy === 'name'} direction={orderBy === 'name' ? order : 'asc'} onClick={() => handleSort('name')}>
                    <Typography color="textSecondary">Name</Typography>
                  </TableSortLabel>
                </TableCell>
              )}
              {shownColumns.includes('city') && <HeaderCell text="City" className={largeCell} />}
              {shownColumns.includes('email') && <HeaderCell text="Email" className={smallCell} />}
              {shownColumns.includes('phone') && <HeaderCell text="Phone" align="right" />}

              <ShowHideColumnCell shownColumns={shownColumns} onCheck={handleCheckColumn} />
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
              <TableRow key={x.id} className={row} onClick={() => handleRowSelect(x.id)} selected={x.id === selectedId}>
                {shownColumns.includes('name') && (
                  <TableCell>
                    <Typography>{x.name}</Typography>
                  </TableCell>
                )}
                {shownColumns.includes('city') && (
                  <TableCell>
                    <Box display="flex" justifyContent="space-between">
                      <Typography>{x.city}</Typography>
                      <ContactActiveIcon active={x.isActive} />
                    </Box>
                  </TableCell>
                )}
                {shownColumns.includes('email') && (
                  <TableCell>
                    <Typography>{x.email}</Typography>
                  </TableCell>
                )}
                {shownColumns.includes('phone') && (
                  <TableCell align="right">
                    <Typography>{x.phone}</Typography>
                  </TableCell>
                )}
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
