import { useState } from 'react';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Index from './components/Index';

function App() {
  const [navbarOpened, setNavbarOpened] = useState(false);
  
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar navbarOpened={navbarOpened} />
      }
      footer={
        <Footer />
      }
      header={
        <Header navbarOpened={navbarOpened} setNavbarOpened={setNavbarOpened} />
      }
    >
      <Index />
    </AppShell>
  );
}

export default App;
