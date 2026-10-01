import { Outlet } from 'react-router-dom';
import { ScrollProgress } from '@/components/animations';
import { WhatsAppFab } from '@/components/ui';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
