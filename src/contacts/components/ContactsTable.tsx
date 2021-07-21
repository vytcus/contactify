import { useState } from 'react';
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
import usePopper from '../../common/hooks/usePopper';

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
    paddingRight: spacing(1),
  },
  checkbox: {
    color: palette.primary.main,
  },
  formControlLabel: {
    margin: 0,
  },
}));

interface Props {
  contacts: Contact[];
  loading: boolean;
}

function ContactsTable({ contacts, loading }: Props) {
  const { listIcon, row, menuItem, checkbox, formControlLabel } = useStyles();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { order, orderBy, handleSort } = useSort('asc', 'name');
  const { anchorRef, open, handleOpen, handleClose } = usePopper();
  const [shownColumns, setShownColumns] = useState<(keyof Contact)[]>(['name', 'city', 'email', 'phone']);

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

  return (
    <Box display="flex">
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow>
              {shownColumns.includes('name') && (
                <TableCell sortDirection={orderBy === 'name' ? order : 'asc'}>
                  <TableSortLabel active={orderBy === 'name'} direction={orderBy === 'name' ? order : 'asc'} onClick={() => handleSort('name')}>
                    <Typography color="textSecondary">Name</Typography>
                  </TableSortLabel>
                </TableCell>
              )}
              {shownColumns.includes('city') && <HeaderCell text="City" />}
              {shownColumns.includes('email') && <HeaderCell text="Email" />}
              {shownColumns.includes('phone') && <HeaderCell text="Phone" align="right" />}

              <TableCell align="right" ref={anchorRef}>
                <Box display="flex" alignItems="center" justifyContent="flex-end" onClick={handleOpen}>
                  <ListIcon className={listIcon} />
                  <Popper open={open} anchorEl={anchorRef.current} placement="bottom-end" transition>
                    <Paper elevation={5}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          <MenuItem className={menuItem}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  color="primary"
                                  checked={shownColumns.includes('name')}
                                  className={checkbox}
                                  onChange={(event) => handleCheckColumn('name', event.target.checked)}
                                />
                              }
                              label="Name"
                              className={formControlLabel}
                            />
                          </MenuItem>
                          <MenuItem className={menuItem}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  color="primary"
                                  checked={shownColumns.includes('city')}
                                  className={checkbox}
                                  onChange={(event) => handleCheckColumn('city', event.target.checked)}
                                />
                              }
                              label="City"
                              className={formControlLabel}
                            />
                          </MenuItem>
                          <MenuItem className={menuItem} button>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  color="primary"
                                  checked={shownColumns.includes('email')}
                                  className={checkbox}
                                  onChange={(event) => handleCheckColumn('email', event.target.checked)}
                                />
                              }
                              label="Email"
                              className={formControlLabel}
                            />
                          </MenuItem>
                          <MenuItem className={menuItem}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  color="primary"
                                  checked={shownColumns.includes('phone')}
                                  className={checkbox}
                                  onChange={(event) => handleCheckColumn('phone', event.target.checked)}
                                />
                              }
                              label="Phone"
                              className={formControlLabel}
                            />
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
