'use client';
import { themeConfig } from '@/configs/theme.config';
// import NavLayout from '@/core/layouts/nav.layout';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';
import { useTheme } from '@/core/providers/theme.provider';
import dynamic from 'next/dynamic';

export default function ContainerDashboard() {
  const { theme } = useTheme();

  const DynamicDasboard = dynamic(() => import('@/core/section/dasboard/dasboard'), {
    ssr: false,
  });

  return (
    <main className={`container mx-auto bg-[${themeConfig[theme].primary.background}]`}>
      <div className="flex flex-col items-center justify-center h-screen">
        <DynamicDasboard />
      </div>
    </main>
  );
}
