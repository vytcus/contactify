import { Box, Checkbox, FormControl, FormControlLabel, InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
  },
}));

function ContactsTableFilters() {
  const { formControl } = useStyles();

  return (
    <Box display="flex" bgcolor={blue[700]}>
      <Box display="flex" flex={1} bgcolor={blue[800]} borderRadius="10px 10px 0px 0px">
        <TextField label="Name" className={formControl} />
        <FormControl className={formControl}>
          <InputLabel id="contacts-table-city-filter-label">City</InputLabel>
          <Select labelId="contacts-table-city-filter-label" />
        </FormControl>
        <FormControl className={formControl}>
          <FormControlLabel control={<Checkbox color="primary" />} label="Show active" />
        </FormControl>
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
