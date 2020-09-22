import React from "react";
import { Flex } from "@chakra-ui/core";
import { IQuestion } from "../../ducks/questions";

interface Props {
  question: IQuestion;
}

const Question: React.FC<Props> = ({ question }) => {
  return (
    <Flex>
      <Flex>{question.title}</Flex>
    </Flex>
  );
};

export default Question;
