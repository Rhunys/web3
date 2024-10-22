/* eslint-disable react/prop-types */
import { Context as OpinionContext } from "/src/contexts/OpinionsContext";
import { useContext } from "react";

const Opinion = ({ opinion }) => {
  const { voteOpinion } = useContext(OpinionContext);

  return (
    <div>
      <span>{`${opinion.text} : ${opinion.score} `} </span>
      <button onClick={() => voteOpinion(opinion.id)}>Vote</button>
    </div>
  );
};

export default Opinion;