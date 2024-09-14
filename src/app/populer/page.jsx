"use client";

import AnimeList from "@/components/AnimeList";
import { getAnimeRespone } from "@/components/libs/api-libs";
import Headermenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const FetchData = async () => {
    const data = await getAnimeRespone("top/anime", `page=${page}`);

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
    // const data = await response.json();
    setTopAnime(data);
  };

  useEffect(() => {
    FetchData();
  }, [page]);
  return (
    <div>
      <Headermenu page={page} />
      <AnimeList api={topAnime} />
      <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
    </div>
  );
};

export default Page;
