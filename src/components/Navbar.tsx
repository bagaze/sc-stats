import {
  Center,
  Navbar as MTNavbar,
  Text,
} from '@mantine/core';

function Navbar({navbarOpened}: Props) {
  return (
    <MTNavbar p="md" hiddenBreakpoint="sm" hidden={!navbarOpened} width={{ sm: 200, lg: 300 }}>
      <Center>
        <Text weight="bold">Vu au cinéma en ...</Text>
      </Center>
    </MTNavbar>
  );
}

export default Navbar;

interface Props {
  navbarOpened: boolean
}
