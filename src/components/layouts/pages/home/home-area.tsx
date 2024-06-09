'use client';

import { useEffect, useRef } from 'react';

import { useCounterStore } from '@/hooks/store/use-counter-store';
import { useIframeData } from '@/hooks/use-iframe-data';
import type { FrameData } from '@/types';

import { Counter } from './counter';
import { DigitsHistory } from './digits-history';
import { RandomNumbersIframe } from './random-numbers-iframe';

const iframeSrc = process.env.NEXT_PUBLIC_IFRAME_SRC as string;

export function HomeArea() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { counter, incrementCounter, lastDigits } = useCounterStore();
  const { data } = useIframeData<FrameData>({
    targetOrigin: iframeSrc,
    ref: iframeRef,
  });

  useEffect(() => {
    if (data?.randomNumber) {
      incrementCounter(data?.randomNumber);
    }
  }, [incrementCounter, data]);

  return (
    <div className="flex size-full flex-col items-center justify-center lg:flex-row lg:justify-between">
      <DigitsHistory digits={lastDigits} />
      <Counter total={counter} />
      <RandomNumbersIframe ref={iframeRef} />
    </div>
  );
}
