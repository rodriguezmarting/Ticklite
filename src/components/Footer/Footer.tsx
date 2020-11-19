import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import {
  PlusSquareIcon,
  HomeSolidIcon,
  HomeOutlineIcon,
  TrendingSolidIcon,
  TrendingOutlineIcon,
  PinnedSolidIcon,
  PinnedOutlineIcon,
  ProfileSolidIcon,
  ProfileOutlineIcon,
} from "../../shared/theme";

const Footer: React.FC = () => {
  const location = useLocation();

  if (location.pathname.match(/\/ask/i)) {
    return null;
  }

  return (
    <Flex bg="gray.700" paddingY={4} paddingX={6} justify="space-between">
      <Home selected={location.pathname === `/`} />
      <Trending selected={location.pathname === `/trending`} />
      <Link to={"/ask"}>
        <PlusSquareIcon data-testid="plus-square-icon" w={8} h={8} />
      </Link>
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
    return <HomeSolidIcon data-testid="home-solid-icon" w={8} h={8} />;
  } else {
    return (
      <Link to={"/"}>
        <HomeOutlineIcon data-testid="home-outline-icon" w={8} h={8} />
      </Link>
    );
  }
};

const Trending: React.FC<Props> = ({ selected }) => {
  if (selected) {
    return <TrendingSolidIcon data-testid="trending-solid-icon" w={8} h={8} />;
  } else {
    return (
      <Link to={"/trending"}>
        <TrendingOutlineIcon data-testid="trending-outline-icon" w={8} h={8} />
      </Link>
    );
  }
};

const Pinned: React.FC<Props> = ({ selected }) => {
  if (selected) {
    return <PinnedSolidIcon data-testid="pinned-solid-icon" w={8} h={8} />;
  } else {
    return (
      <Link to={"/pinned"}>
        <PinnedOutlineIcon data-testid="pinned-outline-icon" w={8} h={8} />
      </Link>
    );
  }
};

const Profile: React.FC<Props> = ({ selected }) => {
  if (selected) {
    return <ProfileSolidIcon data-testid="profile-solid-icon" w={8} h={8} />;
  } else {
    return (
      <Link to={"/profile"}>
        <ProfileOutlineIcon data-testid="profile-outline-icon" w={8} h={8} />
      </Link>
    );
  }
};

export default Footer;
