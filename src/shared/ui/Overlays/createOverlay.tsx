import type { ReactNode } from "react";
import { v4 as uuid } from "uuid";
import { useOverlaysStore } from "./overlaysStore";

export type OverlayProps<T = void> = {
  data: T;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  handleClose: () => void;
};

export const createOverlay = <T = void,>(
  Component: (props: OverlayProps<T>) => ReactNode,
) => {
  const id = uuid();

  const handleOpen = (data: T) => {
    useOverlaysStore.setState({ [id]: { open: true, data } });
  };

  const onOpenChange = (open: boolean) => {
    useOverlaysStore.setState((prev) => ({
      ...prev,
      [id]: { open, data: prev[id]?.data },
    }));
  };

  const handleClose = () => {
    useOverlaysStore.setState((prev) => ({
      ...prev,
      [id]: { open: false, data: prev[id]?.data },
    }));
  };

  const Overlay = () => {
    const item = useOverlaysStore((state) => state[id]);
    if (!item) return null;
    const { open, data } = item;

    return (
      <Component
        open={open}
        data={data as T}
        onOpenChange={onOpenChange}
        handleClose={handleClose}
      />
    );
  };

  const res = {
    id,
    Overlay,
    handleOpen,
    handleClose,
  };

  return res;
};
