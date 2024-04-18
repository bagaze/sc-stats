import { useDisclosure } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import List from "./pages/List";
import { Routes, Route } from "react-router-dom";

function App() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 70 }}
      footer={{ height: 60 }}
      navbar={{
        width: { sm: 200, lg: 300 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} close={close} />
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Navbar toggle={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="list">
            <Route path=":year" element={<List />} />
          </Route>
        </Routes>
      </AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
