import { useState } from 'react';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import List from './pages/List';
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='list'>
          <Route path=':year' element={<List />} />
        </Route>
      </Routes>
    </AppShell>
  );
}

export default App;
