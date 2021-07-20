import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { FormEvent } from 'react';
import useFilter from '../../common/hooks/useFilter';
import { ContactsFilter } from '../model';

export const initialFilter: ContactsFilter = {
  name: '',
  city: '',
  active: false,
};

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
  },
  btn: {
    width: 100,
    borderRadius: 15,
    color: 'white',
  },
}));

interface Props {
  onApplyFilter: (filter: ContactsFilter) => void;
}

function ContactsTableFilters({ onApplyFilter }: Props) {
  const { formControl, btn } = useStyles();
  const { filter, onFilterChange } = useFilter(initialFilter);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onApplyFilter(filter);
  }

  return (
    <Box display="flex" bgcolor={blue[700]}>
      <Box display="flex" flex={1} alignItems="center" bgcolor={blue[800]} borderRadius="10px 10px 0px 0px" px={2}>
        <form onSubmit={onSubmit}>
          <TextField label="Name" className={formControl} value={filter.name} onChange={(event) => onFilterChange('name', event.target.value)} />
          <FormControl className={formControl}>
            <InputLabel id="contacts-table-city-filter-label">City</InputLabel>
            <Select labelId="contacts-table-city-filter-label" value={filter.city} onChange={(event) => onFilterChange('city', event.target.value as string)} />
          </FormControl>
          <FormControl className={formControl}>
            <FormControlLabel
              control={<Checkbox color="primary" value={filter.active} onChange={(event) => onFilterChange('active', event.target.checked)} />}
              label="Show active"
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary" className={btn}>
            Filter
          </Button>
        </form>
      </Box>
      <Box py={2} px={4}>
        <Typography color="textSecondary" variant="h3" component="h1">
          CONTACTIFY
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactsTableFilters;
