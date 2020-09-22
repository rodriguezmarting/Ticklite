import React, { useEffect } from "react";
import Home from "./Home";

import { connect } from "react-redux";
import { IQuestion, fetchQuestions } from "../../ducks/questions";
import { StoreState } from "../../ducks";

interface Props {
  questions: IQuestion[];
  fetchQuestions(): any;
}

const HomeContainer: React.FC<Props> = ({ questions, fetchQuestions }) => {
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return <Home questions={questions} />;
};

const mapStateToProps = ({
  questions,
}: StoreState): { questions: IQuestion[] } => {
  return { questions: questions };
};

export default connect(mapStateToProps, { fetchQuestions })(HomeContainer);
