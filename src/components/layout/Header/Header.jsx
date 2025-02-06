import { AppShellHeader, Flex, Image, Text } from "@mantine/core";
import { IconUser, IconTicket } from "@tabler/icons-react";
import logoSrc from "/public/assets/images/Logo.png";

export const Header = () => (
  <AppShellHeader px={240} py={20}>
    <Flex align="center" gap={150}>
      <Image src={logoSrc} />
      <Flex gap={60} align="center">
        <Flex align="center" gap={8}>
          <IconUser size={24} stroke={1.5} />
          <Text fw={500}>Профиль</Text>
        </Flex>
        <Flex align="center" gap={8}>
          <IconTicket size={24} stroke={1.5} />
          <Text fw={500}>Билеты</Text>
        </Flex>
      </Flex>
    </Flex>
  </AppShellHeader>
);
