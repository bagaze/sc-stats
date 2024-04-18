import { Text, Burger, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import FilmIcon from "../img/film.svg?react";
import { MouseEventHandler } from "react";

function Header({ opened, toggle, close }: Props) {
  return (
    <Group h="100%" px="md">
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        mr="xl"
      />
      <Link to="/" onClick={() => close}>
        <FilmIcon width="3rem" />
        <Text size="xl" fw={700}>
          SC Stats
        </Text>
      </Link>
    </Group>
  );
}

export default Header;

interface Props {
  opened: boolean;
  toggle: MouseEventHandler<HTMLButtonElement>;
  close: MouseEventHandler<HTMLButtonElement>;
}
