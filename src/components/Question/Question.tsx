import React from "react";
import { Flex, Box, Button, Stack, Text } from "@chakra-ui/core";
import { IQuestion } from "../../ducks/questions";

import { Pushpin2 as PinnedSolid } from "@emotion-icons/remix-fill/Pushpin2";
import { Pushpin2 as PinnedOutline } from "@emotion-icons/remix-line/Pushpin2";
import { Share } from "@emotion-icons/boxicons-solid/Share";
import { Spy } from "@emotion-icons/remix-fill/Spy";
import { ParseCaption } from "../../shared/utils";
/* import { DotsHorizontalRounded as Dots } from "@emotion-icons/boxicons-regular/DotsHorizontalRounded"; */
/* import { Settings } from "@emotion-icons/material/Settings"; */

interface Props {
  question: IQuestion;
}

const Question: React.FC<Props> = ({ question }) => {
  return (
    <Flex direction="column" flex={1}>
      <Text paddingX={6} paddingY={4} fontSize="lg">
        {question.title}
      </Text>
      <Flex flex={1}>
        <Flex
          justify="center"
          align="center"
          flex={1}
          bg="gray.50"
          color="red.500"
          fontWeight="black"
          letterSpacing="wider"
          fontSize="xl"
        >
          <Flex>{question.options[0]}</Flex>
        </Flex>
        <Flex
          justify="center"
          align="center"
          flex={1}
          bg="gray.900"
          color="gray.50"
          fontWeight="black"
          letterSpacing="wider"
          fontSize="xl"
        >
          <Box>{question.options[1]}</Box>
        </Flex>
      </Flex>
      <Flex direction="column" paddingX={6} paddingY={4} fontSize="md">
        <Flex direction="row" mb={2}>
          <PinnedQuestion isPinned={question.isPinned} />
          <Box
            data-testid="share-icon"
            as={Share}
            w={8}
            transform="rotateY(180deg)"
          />
          <Box ml={2} data-testid="spy-icon" as={Spy} w={8} />
          {/* <Box data-testid="dots-icon" as={Dots} w={10} /> */}
          {/* <Box data-testid="settings-icon" as={Settings} w={10} /> */}
        </Flex>
        <Flex>
          <Text fontWeight="medium">{question.pins}</Text>
          <Text>&nbsp; Pins</Text>
        </Flex>
        <Stack
          spacing={2}
          direction="row"
          display="flex"
          align="center"
          fontWeight="bold"
        >
          <Text>{question.authorName}</Text>
          <Text>•</Text>
          <Button
            variant="unstyled"
            fontWeight="normal"
            height="auto"
            minW="auto"
          >
            Follow
          </Button>
        </Stack>
        <ParseCaption caption={question.caption} />
      </Flex>
    </Flex>
  );
};

interface PinnedProps {
  isPinned: boolean;
}

const PinnedQuestion: React.FC<PinnedProps> = ({ isPinned }) => {
  if (isPinned) {
    return (
      <Box mr={2} data-testid="pinned-solid-icon" as={PinnedSolid} w={8} />
    );
  } else {
    return (
      <Box mr={2} data-testid="pinned-outline-icon" as={PinnedOutline} w={8} />
    );
  }
};

export default Question;
