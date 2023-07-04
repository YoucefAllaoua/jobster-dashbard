import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../Features/allJobs/allJobsSlice";
import { ChartsContainer, BigLoader, StatsContainer } from "../../components";
const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  if (isLoading) {
    return <BigLoader />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
