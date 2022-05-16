import {
  Stack,
  Navbar as MTNavbar,
  Text,
  Button,
  Space,
} from '@mantine/core';
import { Link } from 'react-router-dom';

function Navbar({navbarOpened}: Props) {
  return (
    <MTNavbar p="md" hiddenBreakpoint="sm" hidden={!navbarOpened} width={{ sm: 200, lg: 300 }}>
      <Stack spacing={0}>
        <Text weight="bold">Vu au cinéma en ...</Text>
        <Space h="md" />
        <Button component={Link} to='/list/2022' variant="default">2022</Button>
        <Button component={Link} to='/list/2021' variant="default">2021</Button>
      </Stack>
    </MTNavbar>
  );
}

export default Navbar;

interface Props {
  navbarOpened: boolean
}
