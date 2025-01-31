import {
  Button,
  Card,
  Flex,
  Group,
  Image,
  SegmentedControl,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const FilmPage = () => {
  const navigate = useNavigate();
  const times = ["11:40", "12:40", "13:40", "14:40", "16:40"];
  const halls = [
    { name: "Красный зал", color: "red" },
    { name: "Синий зал", color: "blue" },
    { name: "Фиолетовый зал", color: "violet" },
  ];

  const [selectedTimes, setSelectedTimes] = useState({});

  const handleTimeSelect = (hall, time) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [hall]: prev[hall] === time ? null : time,
    }));
  };
  return (
    <Flex direction="column">
      <Text onClick={() => navigate(-1)} p="14">
        Назад
      </Text>
      <Flex w={1000} gap={24} direction="row" p={0} radius="md">
        <Image src="/public/assets/images/Уикенд.png" />
        <Stack>
          <Title size={24}>Уикенд с батей (16+)</Title>
          <Text>Фильм</Text>
          <Text>Kinopoisk - 8.4</Text>
          <Text>
            Себастьян планирует провести уикенд со своей очаровательной невестой
            Элли и ее семьей в их роскошном фамильном поместье, где есть
            собственное поле для гольфа, шикарная яхта и даже ручной павлин....
          </Text>
        </Stack>
      </Flex>
      <Title p={24}>Расписание</Title>
      <SegmentedControl
        w={500}
        radius="xs"
        data={[
          "Пн, 9 янв",
          "Вт, 10 янв",
          "Ср, 11 янв",
          "Чт, 12 янв",
          "Пт, 13 янв",
          "Сб, 14 янв",
          "Вс, 15 янв",
        ]}
      />
      <Stack>
        {halls.map(({ name }) => (
          <Card key={name} shadow="none" padding="lg" radius="md">
            <Text size="lg" weight={500} style={{ color: "black" }}>
              {name}
            </Text>
            <Group mt="md">
              {times.map((time) => (
                <Button
                  key={time}
                  variant={selectedTimes[name] === time ? "filled" : "outline"}
                  color={selectedTimes[name] === time ? "gray" : "dark"}
                  radius="xl"
                  onClick={() => handleTimeSelect(name, time)}
                >
                  {time}
                </Button>
              ))}
            </Group>
          </Card>
        ))}
      </Stack>
      <Flex>
        <NavLink to="/сhoosing">
          <Button
            mt="lg"
            w={320}
            bg="#9534D2"
            disabled={Object.values(selectedTimes).every((time) => !time)}
          >
            Продолжить
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  );
};
