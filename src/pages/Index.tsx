import { Title, Text, Stack } from "@mantine/core";

function Index() {
  return (
    <>
      <Stack spacing="md">
        <Title order={1}>Hello!</Title>
        <Text>
          Voilà maintenant plusieurs années que je liste chacun des films vus au
          cinéma sur SensCritique.
        </Text>
        <Text>
          Leur nouvelle API GraphQL permet d'en retirer facilement les
          informations qui m'ínteresse : Nombre de films vus, dans combien de
          salles différentes, etc.
        </Text>
      </Stack>
    </>
  );
}

export default Index;
