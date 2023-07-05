import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { handleChange } from "../Features/allJobs/allJobsSlice";
const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  console.log(numOfPages);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    if (+page < numOfPages) dispatch(handleChange({ name: "page", value: +page + 1 }));
    if (+page == numOfPages) dispatch(handleChange({ name: "page", value: 1 }));
  };
  const prevPage = () => {
    if (+page > 1) dispatch(handleChange({ name: "page", value: +page - 1 }));
    if (+page == 1) dispatch(handleChange({ name: "page", value: numOfPages }));
  };
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
      <div className="btn-container">
        {pages.map((item, index) => {
          return (
            <button
              key={index}
              className={page == item ? "pageBtn active " : "pageBtn"}
              onClick={() => dispatch(handleChange({ name: "page", value: item }))}
            >
              {item}
            </button>
          );
        })}
      </div>
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
