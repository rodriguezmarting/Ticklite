import React from "react";

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import Question from "../Question/Question";
import { IQuestion } from "../../ducks/questions";

interface Props {
  questions?: IQuestion[];
}

const Home: React.FC<Props> = ({ questions }) => {
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
            questions && questions.length && (
              <Question question={questions[0]} />
            )
          }
        </TabPanel>
        <TabPanel>two</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Home;

Home.defaultProps = {
  questions: [],
};
