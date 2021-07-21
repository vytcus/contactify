import { Box, makeStyles } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(({ spacing }) => ({
  skeleton: {
    padding: spacing(1),
  },
}));

function TextSkeleton() {
  const { skeleton } = useStyles();
  return <Skeleton className={skeleton} variant="text" width={200} />;
}

function ContactCardSkeleton() {
  const { skeleton } = useStyles();

  return (
    <Box display="flex" flexDirection="column" minWidth={352}>
      <Box height={56.3} bgcolor="primary.main" />
      <Box py={3} px={6} bgcolor={blueGrey[100]} flex={1}>
        <Skeleton className={skeleton} variant="circle" width={208} height={208} />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </Box>
    </Box>
  );
}

export default ContactCardSkeleton;
