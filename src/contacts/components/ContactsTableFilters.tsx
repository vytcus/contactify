import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { FormEvent } from 'react';
import useFilter from '../../common/hooks/useFilter';
import { ContactsFilter } from '../model';

export const initialFilter: ContactsFilter = {
  name: '',
  city: '',
  active: false,
};

const useStyles = makeStyles(({ spacing }) => ({
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  formControl: {
    minWidth: 120,
    margin: spacing(1),
  },
  btn: {
    width: 100,
    borderRadius: 15,
    color: 'white',
    marginTop: spacing(2),
  },
  checkbox: {
    marginTop: spacing(2),
  },
}));

interface Props {
  cities: string[];
  onApplyFilter: (filter: ContactsFilter) => void;
}

function ContactsTableFilters({ cities, onApplyFilter }: Props) {
  const { form, formControl, btn, checkbox } = useStyles();
  const { filter, handleFilterChange } = useFilter(initialFilter);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onApplyFilter(filter);
  }

  return (
    <Box display="flex" bgcolor={blue[700]}>
      <Box display="flex" flex={1} alignItems="center" bgcolor={blue[800]} borderRadius="10px 10px 0px 0px" px={2}>
        <form className={form} onSubmit={onSubmit}>
          <TextField label="Name" className={formControl} value={filter.name} onChange={(event) => handleFilterChange('name', event.target.value)} />
          <FormControl className={formControl}>
            <InputLabel id="contacts-table-city-filter-label">City</InputLabel>
            <Select labelId="contacts-table-city-filter-label" value={filter.city} onChange={(event) => handleFilterChange('city', event.target.value as string)}>
              <MenuItem value="">None</MenuItem>
              {cities.map((x) => (
                <MenuItem key={x} value={x}>
                  {x}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={formControl}>
            <FormControlLabel
              control={<Checkbox color="primary" value={filter.active} onChange={(event) => handleFilterChange('active', event.target.checked)} />}
              className={checkbox}
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
