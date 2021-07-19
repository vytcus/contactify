import { useContext } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, TableContainer, Paper, Box } from '@material-ui/core';
import { ContactsContext } from '../providers/ContactsProvider';
import HeaderCell from './HeaderCell';

function ContactsTable() {
  const { contacts } = useContext(ContactsContext);

  return (
    <Box display="flex">
      <TableContainer component={Paper}>
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
      </TableContainer>
      <Box>
        <Box height={56.5} bgcolor="primary.main" />
      </Box>
    </Box>
  );
}

export default ContactsTable;
