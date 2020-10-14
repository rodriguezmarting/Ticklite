import React, { useEffect } from "react";
import Home from "./Home";

import {
  IQuestion,
  fetchQuestions,
  selectQuestions,
} from "../../ducks/questions";
import { useSelector, useDispatch } from "react-redux";

const HomeContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const questions: IQuestion[] = useSelector(selectQuestions);
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return <Home questions={questions} />;
};

export default HomeContainer;
