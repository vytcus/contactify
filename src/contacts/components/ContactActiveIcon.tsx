import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

interface Props {
  active: boolean;
}

function ContactActiveIcon({ active }: Props) {
  if (active) {
    return <VisibilityIcon />;
  }

  return <VisibilityOffIcon />;
}

export default ContactActiveIcon;
