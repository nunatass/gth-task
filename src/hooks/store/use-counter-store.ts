import { create } from 'zustand';

import { config } from '@/config';
import type { Digit } from '@/types';

type CounterStore = {
  counter: number;
  lastDigits: Digit[];
  incrementCounter: (digit: number) => void;
  appendDigit: (digit: number) => void;
};

export const useCounterStore = create<CounterStore>()((set, get) => ({
  counter: 0,
  lastDigits: [],
  incrementCounter: (value: number) => {
    set((state) => ({ counter: state.counter + value }));
    get().appendDigit(value);
  },
  appendDigit: (value: number) =>
    set(() => {
      const updatedDigits = get().lastDigits;
      updatedDigits.push({
        digit: value,
        id: crypto.randomUUID(),
      });
      const lastFiveDigits = updatedDigits.slice(-config.maxDigitsToDisplay);
      return { lastDigits: lastFiveDigits };
    }),
}));
