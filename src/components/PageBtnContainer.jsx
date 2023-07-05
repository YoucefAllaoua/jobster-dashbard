import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { handleChange } from "../Features/allJobs/allJobsSlice";
const PageBtnContainer = () => {
  const { numOfPage, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPage }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {};
  const prevPage = () => {};
  return (
    <Wrapper>
      <button
        type="button"
        className=" prev-btn "
        onClick={prevPage}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      {pages.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => dispatch(handleChange({ name: "page", value: item }))}
          >
            {item}
          </button>
        );
      })}
      <button
        type="button"
        className=" next-btn "
        onClick={prevPage}
      >
        <HiChevronDoubleRight />
        next
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
