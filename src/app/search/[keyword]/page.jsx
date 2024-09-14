import AnimeList from "@/components/AnimeList/index";
import Header from "@/components/AnimeList/header";
import { getAnimeRespone } from "@/components/libs/api-libs";

const Home = async ({ params }) => {
  const keyword = params.keyword;

  const searchAnime = await getAnimeRespone("anime", `q=${keyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian Anime ${keyword}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Home;
