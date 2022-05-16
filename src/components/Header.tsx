import { 
  Header as MTHeader,
  MediaQuery,
  Text,
  Burger,
  Group,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { ReactComponent as FilmIcon } from '../img/film.svg';

function Header({ navbarOpened, setNavbarOpened }: Props) {
  return (
    <MTHeader height={70} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={navbarOpened}
            onClick={() => setNavbarOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>

        <Link to='/'>
          <Group spacing="sm">
            <FilmIcon width="2rem" />
            <Text size='xl' weight='bold'>SC Stats</Text>
          </Group>
        </Link>
      </div>
    </MTHeader>
  );
}

export default Header;

interface Props {
  navbarOpened: boolean,
  setNavbarOpened: (value: React.SetStateAction<boolean>) => void
}
