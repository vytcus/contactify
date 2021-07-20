import { Box, Avatar, Typography, makeStyles } from '@material-ui/core';
import { blueGrey, grey } from '@material-ui/core/colors';
import useContactCard from '../hooks/useContactCard';
import ContactCardSkeleton from './ContactCardSkeleton';

const useStyles = makeStyles(({ spacing }) => ({
  avatar: {
    height: 200,
    width: 200,
    borderColor: 'white',
    borderWidth: spacing(1),
    borderStyle: 'solid',
    margin: 20,
  },
  lineTitle: {
    width: 60,
    textAlign: 'right',
    color: grey[700],
  },
  lineText: {
    marginLeft: spacing(3),
  },
}));

interface Props {
  contactId: string;
}

function ContactCard({ contactId }: Props) {
  const { avatar, lineTitle, lineText } = useStyles();
  const { contact, loading } = useContactCard(contactId);

  if (loading || !contact) {
    return <ContactCardSkeleton />;
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box height={56.3} bgcolor="primary.main" />
      <Box py={3} px={6} bgcolor={blueGrey[100]} flex={1}>
        <Avatar src="/public/images/userpic.jpg" className={avatar} />
        <Box>
          <Box display="flex" p={1}>
            <Typography className={lineTitle}>Name:</Typography>
            <Typography className={lineText}>{contact.name}</Typography>
          </Box>
          <Box display="flex" p={1}>
            <Typography className={lineTitle}>City:</Typography>
            <Typography className={lineText}>{contact.city}</Typography>
          </Box>
          <Box display="flex" p={1}>
            <Typography className={lineTitle}>Email:</Typography>
            <Typography className={lineText}>{contact.email}</Typography>
          </Box>
          <Box display="flex" p={1}>
            <Typography className={lineTitle}>Phone:</Typography>
            <Typography className={lineText}>{contact.phone}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactCard;
