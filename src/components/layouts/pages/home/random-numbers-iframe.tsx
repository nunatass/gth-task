import { forwardRef } from 'react';

const iframeSrc = process.env.NEXT_PUBLIC_IFRAME_SRC as string;

export const RandomNumbersIframe = forwardRef<HTMLIFrameElement>((_, ref) => {
  return (
    <section className="flex h-max w-full min-w-12 flex-col items-center justify-center gap-2 py-2 sm:h-1/3 sm:flex-row md:size-full">
      <iframe
        ref={ref}
        title="random number iframe "
        src={iframeSrc}
        className="size-full"
      />
    </section>
  );
});

RandomNumbersIframe.displayName = 'RandomNumbersIframe';
