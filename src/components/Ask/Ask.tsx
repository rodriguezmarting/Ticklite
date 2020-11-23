import React, { useEffect } from "react";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Button,
  Box,
  useRadio,
  UseRadioProps,
  useRadioGroup,
  HStack,
  Text,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Layout2Icon, Layout3Icon, Layout4Icon } from "../../shared/theme";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Layout, IPostQuestion, Status } from "../../shared/declarations";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postQuestion,
  errorCreateSelector,
  statusCreateSelector,
  deleteCreateQuestionError,
} from "../../ducks/questions";

type QuestionData = {
  title: string;
  caption: string;
  layout: Layout;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
};

interface AskProps {
  error: string | undefined;
  status: Status | undefined;
  createQuestion: (data: IPostQuestion) => void;
  clearError: () => void;
}

const AskContainer: React.FC = () => {
  const dispatch = useDispatch();
  const errorCreate = useSelector(errorCreateSelector);
  const statusCreate = useSelector(statusCreateSelector);
  const createQuestion = (data: IPostQuestion) => dispatch(postQuestion(data));
  const clearError = () => dispatch(deleteCreateQuestionError());
  return (
    <Ask
      error={errorCreate}
      status={statusCreate}
      createQuestion={createQuestion}
      clearError={clearError}
    />
  );
};

export const Ask: React.FC<AskProps> = ({
  clearError,
  error,
  status,
  createQuestion,
}) => {
  const history = useHistory();
  const { register, handleSubmit, watch, errors, reset } = useForm<
    QuestionData
  >();
  const layoutWatch = watch("layout");
  const onSubmit = ({
    option1,
    option2,
    option3,
    option4,
    ...values
  }: QuestionData) => {
    const options = [option1, option2];
    if (option3) {
      options.push(option3);
    }
    if (option4) {
      options.push(option4);
    }
    const data = { ...values, options };
    createQuestion(data);
    history.push("/");
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      reset();
    }
  }, [status, reset]);

  return (
    <Flex direction="column" flex={1}>
      <Flex h="3.4rem" bg="gray.700" justify="center" align="center">
        <Button
          position="absolute"
          left="1rem"
          variant="unstyled"
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon w={8} h={8} />
        </Button>
        <Text textAlign="center" fontSize="xl" fontWeight="bold">
          New Question
        </Text>
        <span className="rightElement" />
      </Flex>

      {error && (
        <Alert variant="solid" status="error">
          <AlertIcon />
          {error}
          <CloseButton
            onClick={clearError}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}

      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormControl paddingX={4} paddingY={2}>
          <Input
            name="title"
            ref={register({ required: true })}
            variant="flushed"
            placeholder="Ask your question"
          />
          {errors.title && "Question is required."}
        </FormControl>
        <FormControl paddingX={4} paddingY={2}>
          <Input
            name="caption"
            ref={register}
            variant="flushed"
            placeholder="Add a description"
          />
        </FormControl>
        <FormControl p={4}>
          <FormLabel as="legend" mb={2}>
            Select your layout
          </FormLabel>
          <RadioLayoutGroup register={register} />
        </FormControl>
        <FormControl paddingX={4} paddingY={2}>
          <Input
            name="option1"
            ref={register({ required: true })}
            variant="flushed"
            placeholder="Option 1"
          />
          {errors.option1 && "This option is required."}
        </FormControl>
        <FormControl paddingX={4} paddingY={2}>
          <Input
            name="option2"
            ref={register({ required: true })}
            variant="flushed"
            placeholder="Option 2"
          />
          {errors.option2 && "This option is required."}
        </FormControl>
        {(layoutWatch === "LAYOUT3" || layoutWatch === "LAYOUT4") && (
          <FormControl paddingX={4} paddingY={2}>
            <Input
              name="option3"
              ref={register({ required: true })}
              variant="flushed"
              placeholder="Option 3"
            />
            {errors.option3 && "This option is required."}
          </FormControl>
        )}
        {layoutWatch === "LAYOUT4" && (
          <FormControl paddingX={4} paddingY={2}>
            <Input
              name="option4"
              ref={register({ required: true })}
              variant="flushed"
              placeholder="Option 4"
            />
            {errors.option4 && "This option is required."}
          </FormControl>
        )}
        <Box position="fixed" bottom="0" width="100%" p={4}>
          <Button
            isLoading={status === "LOADING"}
            type="submit"
            width="100%"
            p={2}
            bg="cyan.600"
          >
            Post
          </Button>
        </Box>
      </form>
    </Flex>
  );
};

interface RegisterProp {
  register: () => void;
}

const RadioLayout: React.FC<UseRadioProps & RegisterProp> = ({
  register,
  children,
  ...props
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} ref={register} />
      <Box
        {...checkbox}
        _checked={{ color: "cyan.600" }}
        cursor="pointer"
        role="radio"
        variant="unstyled"
        h="100%"
        color="gray.600"
      >
        {children}
      </Box>
    </Box>
  );
};

const RadioLayoutGroup: React.FC<RegisterProp> = ({ register }) => {
  const options: Layout[] = ["LAYOUT2", "LAYOUT3", "LAYOUT4"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "layout",
    defaultValue: "LAYOUT2",
    onChange: console.log,
  });

  const group = getRootProps();

  const renderLayout = (value: Layout) => {
    switch (value) {
      case "LAYOUT2":
        return <Layout2Icon w="3rem" h="3rem" />;
      case "LAYOUT3":
        return <Layout3Icon w="3rem" h="3rem" />;
      case "LAYOUT4":
        return <Layout4Icon w="3rem" h="3rem" />;
    }
  };

  return (
    <HStack spacing={4} {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioLayout register={register} key={value} {...radio}>
            {renderLayout(value)}
          </RadioLayout>
        );
      })}
    </HStack>
  );
};

export default AskContainer;
