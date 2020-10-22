import React from "react";

interface Props {}

const TrendingContainer: React.FC<Props> = () => {
  return (
    <div>
      This questions are
      <span role="img" aria-label="fire">
        🔥
      </span>
    </div>
  );
};

export default TrendingContainer;
