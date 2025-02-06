import "@mantine/core/styles.css";

import { Header } from "./components/layout";
import {
  Route,
  Routes,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { AppShell, AppShellMain } from "@mantine/core";
import { ROUTES } from "./utils/constants";
import { Film } from "./pages/Film";
import { Choosing } from "./pages/Choosing";
import { useLayoutEffect } from "react";

export const App = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <AppShell px={240} py={100}>
      <Header />
      <AppShellMain>
        <Routes>
          <Route index element={<Home />} />
          <Route path={ROUTES.FILMS} element={<Film />} />
          <Route path={ROUTES.CHOOSING} element={<Choosing />} />
        </Routes>
      </AppShellMain>
    </AppShell>
  );
};
