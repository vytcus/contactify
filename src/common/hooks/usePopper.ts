import { useState, useRef } from 'react';

function usePopper() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  return {
    anchorRef,
    open,
    handleOpen: () => setOpen(true),
    handleClose: () => setOpen(false),
  };
}

export default usePopper;
