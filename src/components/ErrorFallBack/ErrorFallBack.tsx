import React from "react";
import { Flex, Box, Button } from "@chakra-ui/core";
import { FallbackProps } from "react-error-boundary";

const ErrorFallBack: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Flex direction="column" flex={1} bg="gray.800" p={4}>
      <Box>Something went wrong:</Box>
      <Box color="red.400" marginY={2}>
        {error?.message}
      </Box>
      <Button onClick={resetErrorBoundary} variant="outline">
        Try again
      </Button>
    </Flex>
  );
};

export default ErrorFallBack;
