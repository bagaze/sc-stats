import {
  Stack,
  Navbar as MTNavbar,
  Text,
  Button,
  Space,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { USERLIST_IDS } from '../config/consts';

function Navbar({navbarOpened, setNavbarOpened}: Props) {
  const renderListLinks = Object.keys(USERLIST_IDS).sort().reverse().map( (k) => (
      <Button
        key={k}
        component={Link}
        to={`/list/${k}`}
        variant="default"
        onClick={() => setNavbarOpened((o) => !o)}
      >
        {k}
      </Button>
  ) );

  return (
    <MTNavbar p="md" hiddenBreakpoint="sm" hidden={!navbarOpened} width={{ sm: 200, lg: 300 }}>
      <Stack spacing={0}>
        <Text weight="bold">Vu au cinéma en ...</Text>
        <Space h="md" />
        {renderListLinks}
      </Stack>
    </MTNavbar>
  );
}

export default Navbar;

interface Props {
  navbarOpened: boolean
  setNavbarOpened: (value: React.SetStateAction<boolean>) => void
}
