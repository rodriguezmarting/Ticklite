import React, { useEffect } from "react";
import Home from "./Home";

import { useSelector, useDispatch } from "react-redux";
import { IQuestion, fetchQuestions } from "../../ducks/questions";
import { StoreState } from "../../ducks";

const HomeContainer: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const questions: IQuestion[] = useSelector(
    (state: StoreState) => state.questions
  );
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return <Home questions={questions} />;
};

export default HomeContainer;
