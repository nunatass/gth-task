import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

type UseIframeDataProps = {
  targetOrigin: string;
  ref?: RefObject<HTMLIFrameElement | null>;
};

export const useIframeData = <T>({ targetOrigin, ref }: UseIframeDataProps) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      if (ref?.current && targetOrigin !== ref?.current.src) {
        return;
      }
      setData(event.data as T);
    };

    window.addEventListener('message', handleIframeMessage);

    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, [targetOrigin, ref]);

  return { data };
};
