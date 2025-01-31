import { Card, Image, Title, Text, Button, Flex, Stack } from "@mantine/core";
import { NavLink } from "react-router-dom";

export const Home = () => (
  <Stack gap={20}>
    <Title size={32} px={60}>
      Афиша
    </Title>
    <Flex gap={32}>
      <Card p={0} radius="md" w={350}>
        <Image src="/public/assets/images/Уикенд.png" />
        <Title size={24}>Уикенд с батей (16+)</Title>
        <Text>Фильм</Text>
        <Text>Kinopoisk - 8.4</Text>
        <NavLink to="/film">
          <Button w={350} bg="#9534D2">
            Подробнее
          </Button>
        </NavLink>
      </Card>
      <Card p={0} radius="md" w={350}>
        <Image src="/public/assets/images/dog.png" />
        <Title size={24}>Пёс (12+)</Title>
        <Text>Фильм</Text>
        <Text>Kinopoisk - 8.4</Text>
        <Button bg="#9534D2">Подробнее</Button>
      </Card>

      <Card p={0} radius="md" w={350}>
        <Image src="/public/assets/images/Сальвадор.png" />
        <Title size={24}>Быть Сальвадором (16+)</Title>
        <Text>Фильм</Text>
        <Text>Kinopoisk - 8.4</Text>
        <Button bg="#9534D2">Подробнее</Button>
      </Card>
    </Flex>
  </Stack>
);
