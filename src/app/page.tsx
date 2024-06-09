import dynamic from 'next/dynamic';

import { HomeLoading } from '@/components/layouts/pages/home/home-loading';

const HomeArea = dynamic(
  () =>
    import('@/components/layouts/pages/home/home-area').then(
      (module) => module.HomeArea,
    ),
  { ssr: false, loading: () => <HomeLoading /> },
);

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center p-20">
      <HomeArea />
    </main>
  );
}
