import { Box, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(({ spacing }) => ({
  title: {
    width: 60,
    textAlign: 'right',
    color: grey[700],
  },
  text: {
    marginLeft: spacing(3),
  },
}));

interface Props {
  title: string;
  text: string;
}

function ContactCardLine({ title, text }: Props) {
  const classes = useStyles();
  return (
    <Box display="flex" p={1}>
      <Typography className={classes.title}>{title}:</Typography>
      <Typography className={classes.text}>{text}</Typography>
    </Box>
  );
}

export default ContactCardLine;
