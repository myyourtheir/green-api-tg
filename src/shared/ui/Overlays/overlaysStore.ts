import { create } from 'zustand';

export const useOverlaysStore = create<
  Record<
    string,
    {
      open: boolean;
      data: unknown;
    }
  >
>()(() => ({}));
