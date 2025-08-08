import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <WhatsAppFloat/>
      <Footer />
    </>
  );
}
