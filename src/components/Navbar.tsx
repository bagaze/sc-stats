import { Stack, Text, Button, Center } from "@mantine/core";
import { Link } from "react-router-dom";
import { USERLIST_IDS } from "../config/consts";

function Navbar({ toggle }: Props) {
  const renderListLinks = Object.keys(USERLIST_IDS)
    .sort()
    .reverse()
    .map((k) => (
      <Button
        key={k}
        component={Link}
        to={`/list/${k}`}
        variant="default"
        onClick={() => toggle(() => false)}
      >
        {k}
      </Button>
    ));

  return (
    <Stack gap="xs">
      <Center>
        <Text fw={700}>Vu au cinéma en ...</Text>
      </Center>
      {renderListLinks}
    </Stack>
  );
}

export default Navbar;

interface Props {
  toggle: (value: React.SetStateAction<boolean>) => void;
}
