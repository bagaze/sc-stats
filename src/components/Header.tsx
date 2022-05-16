import { 
  Header as MTHeader,
  MediaQuery,
  Space,
  Text,
  Burger
} from '@mantine/core';
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

        <FilmIcon width="2rem" />
        <Space w='sm' />
        <Text size='xl' weight='bold'>Application header</Text>
      </div>
    </MTHeader>
  );
}

export default Header;

interface Props {
  navbarOpened: boolean,
  setNavbarOpened: (value: React.SetStateAction<boolean>) => void
}
