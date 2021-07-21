import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(() => ({
  icon: {
    color: grey[600],
  },
}));

interface Props {
  active: boolean;
}

function ContactActiveIcon({ active }: Props) {
  const { icon } = useStyles();

  if (active) {
    return <VisibilityIcon className={icon} />;
  }

  return <VisibilityOffIcon className={icon} />;
}

export default ContactActiveIcon;
