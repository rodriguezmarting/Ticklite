import React, { useEffect } from "react";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Box,
} from "@chakra-ui/core";
import Question from "../Question/Question";
import {
  QuestionsReducerState,
  questionsInitialState,
  fetchQuestions,
  selectQuestions,
} from "../../ducks/questions";
import { useSelector, useDispatch } from "react-redux";

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
          <TabPanel display="flex" flexDirection="column" flex={1}>
            <Questions questions={questions} />
          </TabPanel>
          <TabPanel display="flex" flexDirection="column" flex={1}>
            <Questions questions={questions} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

const Questions: React.FC<Props> = ({ questions }) => {
  switch (questions.status) {
    case "LOADING": {
      return <Box>Loading...</Box>;
    }
    case "ERROR": {
      return <Box>{questions.error}</Box>;
    }
    case "SUCCESS": {
      return (
        <>
          {questions.data.map((question) => (
            <Question question={question} />
          ))}
        </>
      );
    }
  }
};

export default HomeContainer;
