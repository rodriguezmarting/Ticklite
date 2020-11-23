import React from "react";
import { QuestionsReducerState } from "../../ducks/questions";
import { Box } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import Question from "../Question/Question";

import "./QuestionsList.css";

interface Props {
  questions: QuestionsReducerState;
  width?: number;
  height?: number;
}

const QuestionsList: React.FC<Props> = ({
  questions,
  height = 100,
  width = 100,
}) => {
  switch (questions.status) {
    case "LOADING": {
      return <Box>Loading...</Box>;
    }
    case "ERROR": {
      return <Box>{questions.error}</Box>;
    }
    case "IDLE":
    case "SUCCESS": {
      if (!questions.data.length) {
        return <Box>No questions yet!</Box>;
      }

      return (
        <CarouselProvider
          naturalSlideWidth={width}
          naturalSlideHeight={height}
          totalSlides={questions.data.length}
          orientation="vertical"
        >
          <Slider>
            {questions.data.map((question, index) => (
              <Slide
                innerClassName="slide-full-height"
                index={index}
                key={question.id}
              >
                <Question question={question} />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      );
    }
  }
};

export default QuestionsList;
