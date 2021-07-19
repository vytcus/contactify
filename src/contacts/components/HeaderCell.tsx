import { TableCell, TableCellProps, Typography } from '@material-ui/core';

interface Props extends TableCellProps {
  text: string;
}

function HeaderCell({ text, align }: Props) {
  return (
    <TableCell align={align}>
      <Typography color="textSecondary">{text}</Typography>
    </TableCell>
  );
}

export default HeaderCell;
