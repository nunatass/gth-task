type CounterProps = {
  total: number;
};

export function Counter({ total }: CounterProps) {
  return (
    <section className="flex h-max w-full min-w-12 flex-col items-center justify-center gap-2 py-2 sm:h-1/3 sm:flex-row md:size-full">
      <span>Counter:</span>
      <span>{total}</span>
    </section>
  );
}
