import React from "react";
import { Text, Flex } from "@chakra-ui/core";

interface ParseCaptionProps {
  caption: string | undefined;
}

// Make hashtags bolder for now.
export const ParseCaption: React.FC<ParseCaptionProps> = ({ caption }) => {
  if (!caption) {
    return null;
  }

  const words = caption.split(" ");
  const parsedWords = words.map((word: string, index: number) => {
    let parsedWord: string | JSX.Element = word;
    if (index < words.length) {
      parsedWord = word.concat(" ");
    }
    if (word.charAt(0) === "#") {
      return (
        <span key={index} style={{ fontWeight: 700 }}>
          {parsedWord}
        </span>
      );
    }
    return parsedWord;
  });

  return <Text>{parsedWords}</Text>;
};

export const Header: React.FC = ({ children }) => {
  return (
    <Flex h="3.4rem" bg="gray.700" justify="center" align="center">
      <Text textAlign="center" fontSize="xl" fontWeight="bold">
        {children}
      </Text>
    </Flex>
  );
};
