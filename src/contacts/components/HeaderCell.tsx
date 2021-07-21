import { TableCell, TableCellProps, Typography } from '@material-ui/core';

interface Props extends TableCellProps {
  text: string;
}

function HeaderCell({ text, align, className }: Props) {
  return (
    <TableCell align={align} className={className}>
      <Typography color="textSecondary">{text}</Typography>
    </TableCell>
  );
}

export default HeaderCell;
