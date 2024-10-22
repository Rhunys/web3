import { Context as OpinionsContext } from "/src/contexts/OpinionsContext";
import { useContext } from "react";
import Opinion from "components/OpinionList/Opinion";

const OpinionList = () => {
    const { sortedOpinions } = useContext(OpinionsContext);

  return sortedOpinions.map((opinion) => (
    <Opinion key={opinion.id} {...{ opinion }} />
  ));
}

export default OpinionList;
