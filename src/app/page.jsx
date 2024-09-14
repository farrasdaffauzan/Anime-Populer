import Image from "next/image";
import AnimeList from "@/components/AnimeList/index";
import Link from "next/link";
import Header from "@/components/AnimeList/header";
import { getAnimeRespone } from "@/components/libs/api-libs";

const Home = async () => {
  const topAnime = await getAnimeRespone("top/anime", "limit=8");

  return (
    <>
      <section>
        <Header title={"Paling Populer"} linkhref={"/populer"} linkpage={"Lihat Semua"} />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
