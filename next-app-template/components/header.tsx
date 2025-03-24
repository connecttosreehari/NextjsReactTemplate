"use client";

import React from "react";
import { Avatar, Box, Flex, IconButton, Link, Menu, Portal, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="brand.800" color="white" px={4} py={2}>
      <Flex>
        <Box fontSize="xl" fontWeight="bold">
          <Link href="/">MyLogo</Link>
        </Box>
        <Spacer />
        <Flex gap={4}>
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
        <Spacer />
        <Menu.Root>
          <Menu.Trigger asChild>
            <IconButton variant="ghost">
              <Avatar.Root>
                <Avatar.Fallback name="My Profile" />
                <Avatar.Image src="#" />
              </Avatar.Root>
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="profile">Profile</Menu.Item>
                <Menu.Item value="logout">Logout</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>
    </Box>
  );
};

export default Header;
