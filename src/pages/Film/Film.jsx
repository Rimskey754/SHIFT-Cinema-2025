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
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { ROUTES } from "../../utils/constants";
import { getCinemaById } from "../../utils/api/requests";

const TIMES = ["11:40", "12:40", "13:40", "14:40", "16:40"];

const HALLS = [
  { name: "Красный зал" },
  { name: "Синий зал" },
  { name: "Фиолетовый зал" },
];

const DATES = [
  "Пн, 9 янв",
  "Вт, 10 янв",
  "Ср, 11 янв",
  "Чт, 12 янв",
  "Пт, 13 янв",
  "Сб, 14 янв",
  "Вс, 15 янв",
];

export const Film = () => {
  const params = useParams();

  const { id } = params;

  const navigate = useNavigate();

  const [selectedTimes, setSelectedTimes] = useState({});

  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleTimeSelect = (hall, time) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [hall]: prev[hall] === time ? null : time,
    }));
  };

  const navigateToBack = () => navigate(-1);
  const navigateToChoosingPage = () => navigate(ROUTES.CHOOSING);

  useEffect(() => {
    const fetchFilmById = async () => {
      setLoading(true);

      const getCinemaByIdResponse = await getCinemaById(id);

      if (getCinemaByIdResponse.data.success === false) {
        return setError("Произошла ошибка при получении данных");
      }
      setFilm(getCinemaByIdResponse.data.film);
      setLoading(false);
    };

    fetchFilmById();
  }, []);

  if (loading) return <div>ЗАГРУЗКА...</div>;

  if (error) return <div>{error}</div>;

  console.log(film);

  return (
    <Flex direction="column">
      <Text
        onClick={navigateToBack}
        p="14"
        style={{ cursor: "pointer", color: "blue" }}
      >
        Назад
      </Text>
      <Flex w={1000} gap={24} direction="row" p={0} radius="md">
        <Image w={400} h={400} src={`/public/assets/images/film_${id}.webp`} />
        <Stack>
          <Title size={24}>Уикенд с батей (16+)</Title>
          <Text>Фильм</Text>
          <Text>Kinopoisk - 8.4</Text>
          <Text>
            Себастьян планирует провести уикенд со своей очаровательной невестой
            Элли и ее семьей в их роскошном фамильном поместье, где есть
            собственное поле для гольфа, шикарная яхта и даже ручной павлин...
          </Text>
        </Stack>
      </Flex>
      <Title p={24}>Расписание</Title>
      <SegmentedControl w={500} radius="xs" data={DATES} />
      <Stack>
        {HALLS.map(({ name }) => (
          <Card key={name} shadow="none" padding="lg" radius="md">
            <Text size="lg" weight={500}>
              {name}
            </Text>
            <Group mt="md">
              {TIMES.map((time) => (
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
        <Button
          onClick={navigateToChoosingPage}
          mt="lg"
          w={320}
          bg="#9534D2"
          disabled={Object.values(selectedTimes).every((time) => !time)}
        >
          Продолжить
        </Button>
      </Flex>
    </Flex>
  );
};
