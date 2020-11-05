import React, { useEffect, useRef } from "react";

import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex } from "@chakra-ui/core";
import {
  QuestionsReducerState,
  questionsInitialState,
  fetchQuestions,
  selectQuestions,
} from "../../ducks/questions";
import { useSelector, useDispatch } from "react-redux";
import QuestionsList from "../QuestionsList/QuestionsList";

interface Props {
  questions: QuestionsReducerState;
}

const HomeContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const questions: QuestionsReducerState = useSelector(selectQuestions);
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return <Home questions={questions} />;
};

const Home: React.FC<Props> = ({ questions = questionsInitialState }) => {
  const tabRef = useRef<HTMLDivElement>(null);

  const dimensions = {
    height: 0,
    width: 0,
  };

  if (tabRef && tabRef.current) {
    const rect = tabRef.current.getBoundingClientRect();
    dimensions.width = rect.width;
    dimensions.height = rect.height;
  }

  return (
    <Flex direction="column" flex={1}>
      <Tabs
        display="flex"
        flexDirection="column"
        align="center"
        size="lg"
        variant="unstyled"
        flex={1}
      >
        <TabList>
          <Tab
            fontSize="xl"
            fontWeight="thin"
            _selected={{ fontWeight: "bold" }}
          >
            Following
          </Tab>
          <Tab
            fontSize="xl"
            fontWeight="thin"
            _selected={{ fontWeight: "bold" }}
          >
            Discover
          </Tab>
        </TabList>
        <TabPanels display="flex" flexDirection="column" flex={1}>
          <TabPanel ref={tabRef} display="flex" flexDirection="column" flex={1}>
            <QuestionsList
              height={dimensions.height}
              width={dimensions.width}
              questions={questions}
            />
          </TabPanel>
          <TabPanel display="flex" flexDirection="column" flex={1}>
            <QuestionsList
              height={dimensions.height}
              width={dimensions.width}
              questions={questions}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default HomeContainer;
