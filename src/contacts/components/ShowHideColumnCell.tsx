import { Box, Checkbox, ClickAwayListener, FormControlLabel, makeStyles, MenuItem, MenuList, Paper, Popper, TableCell } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import usePopper from '../../common/hooks/usePopper';
import { ColumnShowHideOption, Contact } from '../model';

const useStyles = makeStyles(({ spacing, palette }) => ({
  listIcon: {
    color: 'white',
    cursor: 'pointer',
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

const options: ColumnShowHideOption[] = [
  { key: 'name', label: 'Name' },
  { key: 'city', label: 'City' },
  { key: 'email', label: 'Email' },
  { key: 'phone', label: 'Phone' },
];

interface Props {
  shownColumns: (keyof Contact)[];
  onCheck: (prop: keyof Contact, checked: boolean) => void;
}

function ShowHideColumnCell({ shownColumns, onCheck }: Props) {
  const { listIcon, menuItem, checkbox, formControlLabel } = useStyles();
  const { anchorRef, open, handleOpen, handleClose } = usePopper();

  return (
    <TableCell align="right" ref={anchorRef}>
      <Box display="flex" alignItems="center" justifyContent="flex-end" onClick={handleOpen}>
        <ListIcon className={listIcon} />
        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-end" transition>
          <Paper elevation={5}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList>
                {options.map((x) => (
                  <MenuItem key={x.key} className={menuItem}>
                    <FormControlLabel
                      control={<Checkbox color="primary" checked={shownColumns.includes(x.key)} className={checkbox} onChange={(event) => onCheck(x.key, event.target.checked)} />}
                      label={x.label}
                      className={formControlLabel}
                    />
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </Box>
    </TableCell>
  );
}

export default ShowHideColumnCell;
