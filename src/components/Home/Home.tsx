import React, { useEffect, useRef } from "react";

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

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "./Home.css";

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
            <Questions
              height={dimensions.height}
              width={dimensions.width}
              questions={questions}
            />
          </TabPanel>
          <TabPanel display="flex" flexDirection="column" flex={1}>
            <Questions
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

interface QuestionsProps {
  questions: QuestionsReducerState;
  width: number;
  height: number;
}

const Questions: React.FC<QuestionsProps> = ({ questions, height, width }) => {
  switch (questions.status) {
    case "LOADING": {
      return <Box>Loading...</Box>;
    }
    case "ERROR": {
      return <Box>{questions.error}</Box>;
    }
    case "SUCCESS": {
      return (
        <CarouselProvider
          naturalSlideWidth={width}
          naturalSlideHeight={height}
          totalSlides={questions.data.length}
          orientation="vertical"
        >
          <Slider>
            {questions.data.map((question, index) => (
              <Slide innerClassName="slide-full-height" index={index}>
                <Question key={question.id} question={question} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      );
    }
  }
};

export default HomeContainer;
