import { useSelector } from "react-redux";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useState } from "react";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
