import type { Digit } from '@/types';

type DigitsHistoryProps = {
  digits: Digit[];
};

export function DigitsHistory({ digits }: DigitsHistoryProps) {
  return (
    <section className="flex h-max min-h-12 w-full min-w-max flex-col items-center justify-center gap-2 border py-2 sm:h-1/3 sm:flex-row  md:size-full">
      {digits.map(({ digit, id }) => (
        <div
          className="flex size-4 items-center justify-center border p-2.5 sm:size-8 sm:p-5"
          key={id}
        >
          {digit}
        </div>
      ))}
    </section>
  );
}
