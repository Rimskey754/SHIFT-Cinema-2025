import {
  Card,
  Image,
  Title,
  Text,
  Button,
  Stack,
  Flex,
  SimpleGrid,
} from "@mantine/core";
import { NavLink, useNavigate, generatePath } from "react-router-dom";
import { getCinemaToday } from "../../utils/api/requests";
import { useEffect, useState } from "react";
import { ROUTES } from "../../utils/constants";
import { IconStarFilled } from "@tabler/icons-react";

export const Home = () => {
  const navigate = useNavigate();

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const navigateToFilm = (id) => navigate(generatePath(ROUTES.FILMS, { id }));

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);

      const getCinemaTodayResponse = await getCinemaToday();

      if (getCinemaTodayResponse.data.success === false) {
        return setError("Произошла ошибка при получении фильмов");
      }

      setFilms(getCinemaTodayResponse.data.films);
      setLoading(false);
    };

    fetchFilms();
  }, []);

  if (loading) return <div>ЗАГРУЗКА...</div>;

  if (error) return <div>{error}</div>;

  return (
    <Stack gap={20}>
      <Title size={32} px={60}>
        Афиша
      </Title>
      <SimpleGrid spacing={0} verticalSpacing="lg" cols={3}>
        {films.map((film) => {
          return (
            <Card key={film.id} p={0} radius="md" w={350}>
              <Stack h={650} justify="space-between">
                <Image
                  h={400}
                  src={`/public/assets/images/film_${film.id}.webp`}
                />
                <Title size={24}>{film.name}</Title>
                <Text>Фильм</Text>
                <Flex>
                  <IconStarFilled color="var(--mantine-color-yellow-5)" />
                  <IconStarFilled color="var(--mantine-color-yellow-5)" />
                  <IconStarFilled color="var(--mantine-color-yellow-5)" />
                  <IconStarFilled color="var(--mantine-color-yellow-5)" />
                  <IconStarFilled color="var(--mantine-color-yellow-5)" />
                </Flex>
                <Text> Kinopoisk - {film.userRatings.kinopoisk}</Text>
                <Button
                  size="xl"
                  radius="lg"
                  onClick={() => navigateToFilm(film.id)}
                  w={350}
                  bg="#9534D2"
                >
                  Подробнее
                </Button>
              </Stack>
            </Card>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
