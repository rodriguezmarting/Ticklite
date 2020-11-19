import React, { useRef, useEffect } from "react";
import QuestionsList from "../QuestionsList/QuestionsList";
import { Header } from "../../shared/utils";
import { Flex } from "@chakra-ui/react";
import { useDimensions } from "../../shared/useDimensions";
import { useSelector, useDispatch } from "react-redux";
import {
  hashtagSelector,
  fetchHashtag,
  HashtagReducerState,
} from "../../ducks/hashtag";
import { useLocation } from "react-router-dom";

interface LocationState {
  id: number;
}

const HashtagContainer: React.FC = () => {
  const hashtag = useSelector(hashtagSelector);
  const dispatch = useDispatch();
  const location = useLocation<LocationState>();

  useEffect(() => {
    dispatch(fetchHashtag(location.state.id));
  }, [dispatch, location.state.id]);

  return <Hashtag hashtag={hashtag} />;
};

interface Props {
  hashtag: HashtagReducerState;
}

export const Hashtag: React.FC<Props> = ({ hashtag }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useDimensions(ref);

  return (
    <Flex direction="column" flex={1}>
      <Header>{hashtag.title}</Header>
      <Flex ref={ref} direction="column" flex={1}>
        <QuestionsList height={height} width={width} questions={hashtag} />
      </Flex>
    </Flex>
  );
};

export default HashtagContainer;
