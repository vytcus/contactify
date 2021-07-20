import { useContext, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, makeStyles } from '@material-ui/core';
import { ContactsContext } from '../providers/ContactsProvider';
import HeaderCell from './HeaderCell';
import ContactCard from './ContactCard';

const useStyles = makeStyles(() => ({}));

function ContactsTable() {
  const {} = useStyles();
  const { contacts } = useContext(ContactsContext);
  const [selectedId] = useState<number | null>(1);

  return (
    <Box display="flex">
      <Table size="medium">
        <TableHead>
          <TableRow>
            <HeaderCell text="Name" />
            <HeaderCell text="City" />
            <HeaderCell text="Email" />
            <HeaderCell text="Phone" align="right" />
          </TableRow>
        </TableHead>

        <TableBody>
          {contacts.map((x) => (
            <TableRow key={x.id}>
              <TableCell>
                <Typography>{x.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{x.city}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{x.email}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{x.phone}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedId && <ContactCard contactId={selectedId} />}
    </Box>
  );
}

export default ContactsTable;
