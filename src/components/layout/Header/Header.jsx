import { AppShellHeader, Flex, Image, Text } from "@mantine/core";
import logoSrc from "/public/assets/images/Logo.png";

export const Header = () => (
  <AppShellHeader px={240} py={20}>
    <Flex align="center" gap={150}>
      <Image src={logoSrc} />
      <Flex gap={60}>
        <Text fw={500}>Профиль</Text>
        <Text fw={500}>Билеты</Text>
      </Flex>
    </Flex>
  </AppShellHeader>
);
