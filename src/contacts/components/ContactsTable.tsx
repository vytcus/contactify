import { useRef, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
  makeStyles,
  TableContainer,
  LinearProgress,
  TableSortLabel,
  Popper,
  MenuList,
  MenuItem,
  Paper,
  ClickAwayListener,
  FormControlLabel,
} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { blueGrey } from '@material-ui/core/colors';
import HeaderCell from './HeaderCell';
import ContactCard from './ContactCard';
import { Contact, Order } from '../model';
import ContactActiveIcon from './ContactActiveIcon';
import useSort from '../../common/hooks/useSort';
import { Checkbox } from '@material-ui/core';

function getComparatorByOrder(order: Order) {
  if (order === 'asc') {
    return (a: Contact, b: Contact) => a.name.localeCompare(b.name);
  } else if (order === 'desc') {
    return (a: Contact, b: Contact) => b.name.localeCompare(a.name);
  }

  throw Error('Wrong order specified.');
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  listIcon: {
    color: 'white',
    cursor: 'pointer',
  },
  row: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: blueGrey[50],
    },
  },
  menuItem: {
    padding: 0,
    paddingLeft: spacing(1),
  },
  checkbox: {
    color: palette.primary.main,
  },
}));

interface Props {
  contacts: Contact[];
  loading: boolean;
}

function ContactsTable({ contacts, loading }: Props) {
  const { listIcon, row, menuItem, checkbox } = useStyles();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { order, orderBy, handleSort } = useSort('asc', 'name');
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
              <TableCell align="right" ref={anchorRef}>
                <Box display="flex" alignItems="center" justifyContent="flex-end" onClick={handleOpen}>
                  <ListIcon className={listIcon} />
                  <Popper open={open} anchorEl={anchorRef.current} placement="bottom-end" transition>
                    <Paper elevation={5}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          <MenuItem className={menuItem}>
                            <FormControlLabel control={<Checkbox color="primary" className={checkbox} />} label="Name" />
                          </MenuItem>
                          <MenuItem className={menuItem}>
                            <FormControlLabel control={<Checkbox color="primary" className={checkbox} />} label="City" />
                          </MenuItem>
                          <MenuItem className={menuItem}>
                            <FormControlLabel control={<Checkbox color="primary" className={checkbox} />} label="Email" />
                          </MenuItem>
                          <MenuItem className={menuItem}>
                            <FormControlLabel control={<Checkbox color="primary" className={checkbox} />} label="Phone" />
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Popper>
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
