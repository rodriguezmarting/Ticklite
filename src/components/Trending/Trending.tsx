import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  TrendingReducerState,
  trendingSelector,
  fetchTrending,
  trendingInitialState,
  ITrending,
} from "../../ducks/trending";
import { Box, Flex, Divider } from "@chakra-ui/core";
import { IQuestion } from "../../ducks/questions";
import { formatNumber, Header } from "../../shared/utils";

const TrendingContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const trending: TrendingReducerState = useSelector(trendingSelector);
  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  return <TrendingPage trending={trending} />;
};

interface Props {
  trending: TrendingReducerState;
}

export const TrendingPage: React.FC<Props> = ({
  trending = trendingInitialState,
}) => {
  switch (trending.status) {
    case "LOADING": {
      return <Box>Loading...</Box>;
    }
    case "ERROR": {
      return <Box>{trending.error}</Box>;
    }
    case "SUCCESS": {
      if (!trending.data.length) {
        return <Box>No trendings yet!</Box>;
      }

      return (
        <Flex direction="column" flex={1}>
          <Header>Trending</Header>
          <Flex direction="column" flex={1}>
            {trending.data.map((trending: ITrending, index: number) => (
              <Trending
                key={trending.id}
                trending={trending}
                trendingIndex={index}
              />
            ))}
          </Flex>
        </Flex>
      );
    }
  }
};

interface TrendingProps {
  trending: ITrending;
  trendingIndex: number;
}

const Trending: React.FC<TrendingProps> = ({ trending, trendingIndex }) => {
  return (
    <Flex direction="column">
      <Flex
        justify="space-between"
        align="center"
        mb={2}
        paddingY={2}
        paddingX={4}
      >
        <Box data-testid="trending-title">{trending.title}</Box>
        <Box bg="gray.700" paddingY={1} paddingX={3} borderRadius={2}>
          {formatNumber(trending.interactions)}
        </Box>
      </Flex>
      <Flex paddingX={4} mb={4}>
        {trending.topQuestions.map(
          (question: IQuestion, questionIndex: number) => {
            const isDark = (trendingIndex + questionIndex) % 2 !== 0;
            return (
              <Box
                h="8rem"
                w="5.5rem"
                p={2}
                mr={1}
                fontSize="xs"
                fontWeight="bold"
                color={isDark ? "gray.200" : "gray.800"}
                bg={isDark ? "gray.800" : "gray.200"}
                border="1px"
                borderColor="gray.200"
                key={question.id}
              >
                {question.title}
              </Box>
            );
          }
        )}
      </Flex>
      <Divider />
    </Flex>
  );
};

export default TrendingContainer;
