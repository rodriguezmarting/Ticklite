import React, { useEffect, useRef } from "react";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import {
  QuestionsReducerState,
  questionsInitialState,
  fetchQuestions,
  selectQuestions,
} from "../../ducks/questions";
import { useSelector, useDispatch } from "react-redux";
import QuestionsList from "../QuestionsList/QuestionsList";
import { useDimensions } from "../../shared/useDimensions";

const HomeContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const questions: QuestionsReducerState = useSelector(selectQuestions);
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return <Home questions={questions} />;
};

interface Props {
  questions: QuestionsReducerState;
}

const Home: React.FC<Props> = ({ questions = questionsInitialState }) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const { width, height } = useDimensions(tabRef);

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
        <TabList bg="gray.700">
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
          <TabPanel
            p={0}
            ref={tabRef}
            display="flex"
            flexDirection="column"
            flex={1}
          >
            <QuestionsList
              height={height}
              width={width}
              questions={questions}
            />
          </TabPanel>
          <TabPanel p={0} display="flex" flexDirection="column" flex={1}>
            <QuestionsList
              height={height}
              width={width}
              questions={questions}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default HomeContainer;
