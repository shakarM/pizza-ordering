import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" w-[10rem] rounded-md bg-rose-100 
        px-4 py-2 
        text-white
        transition-all
        duration-500 placeholder:font-semibold
        placeholder:text-rose-500
        placeholder:opacity-85
        focus:w-[16rem]
        focus:outline-none
        sm:w-[12rem]
        "
      />
    </form>
  );
}

export default SearchOrder;
