import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/core";
import { HomeFill as HomeSolid } from "@emotion-icons/octicons/HomeFill";
import { Home as HomeOutline } from "@emotion-icons/octicons/Home";
import { Fire as TrendingSolid } from "@emotion-icons/remix-fill/Fire";
import { Fire as TrendingOutline } from "@emotion-icons/remix-line/Fire";
import { PlusSquare } from "@emotion-icons/boxicons-solid/PlusSquare";
import { Pushpin2 as PinnedSolid } from "@emotion-icons/remix-fill/Pushpin2";
import { Pushpin2 as PinnedOutline } from "@emotion-icons/remix-line/Pushpin2";
import { PersonFill as ProfileSolid } from "@emotion-icons/bootstrap/PersonFill";
import { Person as ProfileOutline } from "@emotion-icons/bootstrap/Person";

const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <Flex bg="gray.700" paddingY={4} paddingX={6} justify="space-between">
      <Home selected={location.pathname === `/`} />
      <Trending selected={location.pathname === `/trending`} />
      <Box data-testid="plus-square-icon" as={PlusSquare} w={10} />
      <Pinned selected={location.pathname === `/pinned`} />
      <Profile selected={location.pathname === `/profile`} />
    </Flex>
  );
};

interface Props {
  selected: boolean;
}

const Home: React.FC<Props> = ({ selected }) => {
  if (selected) {
    return <Box data-testid="home-solid-icon" as={HomeSolid} w={10} />;
  } else {
    return (
      <Link to={"/"}>
        <Box data-testid="home-outline-icon" as={HomeOutline} w={10} />
      </Link>
    );
  }
};

const Trending: React.FC<Props> = ({ selected }) => {
  if (selected) {
    return <Box data-testid="trending-solid-icon" as={TrendingSolid} w={10} />;
  } else {
    return (
      <Link to={"/trending"}>
        <Box data-testid="trending-outline-icon" as={TrendingOutline} w={10} />
      </Link>
    );
  }
};

const Pinned: React.FC<Props> = ({ selected }) => {
  if (selected) {
    return <Box data-testid="pinned-solid-icon" as={PinnedSolid} w={10} />;
  } else {
    return (
      <Link to={"/pinned"}>
        <Box data-testid="pinned-outline-icon" as={PinnedOutline} w={10} />
      </Link>
    );
  }
};

const Profile: React.FC<Props> = ({ selected }) => {
  if (selected) {
    return <Box data-testid="profile-solid-icon" as={ProfileSolid} w={10} />;
  } else {
    return (
      <Link to={"/profile"}>
        <Box data-testid="profile-outline-icon" as={ProfileOutline} w={10} />
      </Link>
    );
  }
};

export default Footer;
