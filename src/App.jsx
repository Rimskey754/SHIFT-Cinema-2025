import "@mantine/core/styles.css";

import { Header } from "./components/layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AppShell, AppShellMain } from "@mantine/core";
import { FilmPage } from "./pages/FilmPage";
import { ChoosingPage } from "./pages/ChoosingPage";

export const App = () => (
  <AppShell px={240} py={100}>
    <Header />
    <AppShellMain>
      <Routes>
        <Route index element={<Home />} />
        <Route path="film" element={<FilmPage />} />
        <Route path="choosing" element={<ChoosingPage />} />
      </Routes>
    </AppShellMain>
  </AppShell>
);
