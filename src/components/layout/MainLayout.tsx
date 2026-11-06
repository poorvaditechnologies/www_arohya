import { Outlet } from 'react-router-dom';
import { ScrollProgress, SmoothScroll } from '@/components/animations';
import { WhatsAppFab } from '@/components/ui';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </SmoothScroll>
  );
}
