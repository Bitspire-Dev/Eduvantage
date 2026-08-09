"use client";

import { useRef } from 'react';
import { useOnScreen } from '@/hooks/useOnScreen';
import { useCountUp } from '@/hooks/useCountUp';

export function CountUpClient({
  end,
  suffix = '',
}: {
  end: number;
  suffix?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(containerRef, { threshold: 0.3 });
  const valueRef = useCountUp(visible, end, 1400);

  return (
    <div ref={containerRef}>
      <span ref={valueRef}>
        {new Intl.NumberFormat('pl-PL').format(0)}{suffix}
      </span>
    </div>
  );
}
