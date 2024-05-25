import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const DefaultLayout = () => {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='bg-gray-50 flex-shrink-0 flex-1'>
        <Outlet />
      </section>
    </main>
  );
};
