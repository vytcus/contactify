import { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, makeStyles, TableContainer, LinearProgress } from '@material-ui/core';
import HeaderCell from './HeaderCell';
import ContactCard from './ContactCard';
import { Contact } from '../model';

const useStyles = makeStyles(() => ({}));

interface Props {
  contacts: Contact[];
  loading: boolean;
}

function ContactsTable({ contacts, loading }: Props) {
  const {} = useStyles();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Box display="flex">
      <TableContainer>
        <Table size="medium">
          <TableHead>
            <TableRow>
              <HeaderCell text="Name" />
              <HeaderCell text="City" />
              <HeaderCell text="Email" />
              <HeaderCell text="Phone" align="right" />
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
            {contacts.map((x) => (
              <TableRow key={x.id} onClick={() => setSelectedId(x.id)} selected={x.id === selectedId}>
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

      {selectedId && <ContactCard contactId={selectedId} />}
    </Box>
  );
}

export default ContactsTable;
