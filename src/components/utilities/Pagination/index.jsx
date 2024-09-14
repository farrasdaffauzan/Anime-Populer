const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handelNext = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handelPrev = () => {
    setPage((prevState) => prevState - 1);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-row text-color-primary">
        <button className="p-2 rounded hover:text-color-accent" onClick={handelPrev}>
          Prev
        </button>
        <h3 className="p-2 rounded">
          {page} of {lastPage}
        </h3>
        <button className="p-2 rounded hover:text-color-accent" onClick={handelNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
