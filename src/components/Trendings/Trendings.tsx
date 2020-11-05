import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  TrendingsReducerState,
  trendingsSelector,
  fetchTrendings,
  trendingsInitialState,
  ITrending,
} from "../../ducks/trendings";
import { Box } from "@chakra-ui/core";

const TrendingsContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const trendings: TrendingsReducerState = useSelector(trendingsSelector);
  useEffect(() => {
    dispatch(fetchTrendings());
  }, [dispatch]);

  return <TrendingsPage trendings={trendings} />;
};

interface Props {
  trendings: TrendingsReducerState;
}

const TrendingsPage: React.FC<Props> = ({
  trendings = trendingsInitialState,
}) => {
  switch (trendings.status) {
    case "LOADING": {
      return <Box>Loading...</Box>;
    }
    case "ERROR": {
      return <Box>{trendings.error}</Box>;
    }
    case "SUCCESS": {
      if (!trendings.data.length) {
        return <Box>No trendings yet!</Box>;
      }

      return (
        <Box>
          {trendings.data.map((trending: ITrending) => (
            <Trending key={trending.id} trending={trending} />
          ))}
        </Box>
      );
    }
  }
};

interface TrendingProps {
  trending: ITrending;
}

const Trending: React.FC<TrendingProps> = ({ trending }) => {
  return <Box>{trending.title}</Box>;
};

export default TrendingsContainer;
