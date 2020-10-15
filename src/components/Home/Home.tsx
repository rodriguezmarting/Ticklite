import React, { useEffect } from "react";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import Question from "../Question/Question";
import {
  QuestionsReducerState,
  questionsInitialState,
  fetchQuestions,
  selectQuestions,
} from "../../ducks/questions";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  questions?: QuestionsReducerState;
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
    <Tabs align="center" size="lg" variant="unstyled">
      <TabList>
        <Tab>Following</Tab>
        <Tab>Discover</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {
            // TODO: Refactorthis into a QuestionsList component
            questions &&
              questions.data.length &&
              questions.status === "IDLE" && (
                <Question question={questions.data[0]} />
              )
          }
        </TabPanel>
        <TabPanel>two</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default HomeContainer;
