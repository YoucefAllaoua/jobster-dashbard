import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from "./";
import { clearFilters, handleChange } from "../Features/allJobs/allJobsSlice";
import { useMemo, useState } from "react";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } = useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearchI("");
    dispatch(clearFilters());
  };
  // this value is to change the value of the search locally
  const [localSearch, setLocalSearch] = useState("");
  // this is the debounce function
  const debounce = (e) => {
    let timeOutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        dispatch(handleChange({ name: "search", value: e.target.value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => {
    return debounce();
  }, []);
  return (
    <Wrapper>
      <form
        action=""
        className="form"
      >
        <h4>Search form</h4>
        {/* search position */}
        <FormRow
          type="text"
          name="search"
          value={localSearch}
          // we invoke the function once the component is rendered , so we sue useMemo
          handleChange={optimizedDebounce}
        />
        {/* search by status */}
        <FormRowSelect
          labelText="status"
          name="searchStatus"
          value={searchStatus}
          handleInput={handleSearch}
          list={["all", ...statusOptions]}
        />
        {/* search by jobType */}
        <FormRowSelect
          labelText="type"
          name="searchType"
          value={searchType}
          handleInput={handleSearch}
          list={["all", ...jobTypeOptions]}
        />
        {/* sort */}
        <FormRowSelect
          name="sort"
          value={sort}
          handleInput={handleSearch}
          list={sortOptions}
        />
        {/* btns */}
        <button
          className=" btn btn-block btn-danger  "
          disabled={isLoading}
          onClick={handleSubmit}
        >
          Clear filters
        </button>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
