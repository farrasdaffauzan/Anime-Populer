"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchInput = useRef();
  const route = useRouter();

  const handleSearch = (event) => {
    const keyword = searchInput.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      route.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input placeholder="Cari anime.." className="md:p-2 p-0.5 rounded" ref={searchInput} onKeyDown={handleSearch} />
      <button className="absolute md:top-2 md:end-2 top-1 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
