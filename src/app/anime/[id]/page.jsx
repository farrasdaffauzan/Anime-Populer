import { getAnimeRespone } from "@/components/libs/api-libs";
import Image from "next/image";

const Anime = async ({ params: { id } }) => {
  const getAnime = await getAnimeRespone(`anime/${id}`);
  const detailAnime = getAnime.data;

  return (
    <div className="flex flex-col text-center justify-center m-3">
      <h1 className="text-color-primary text-2xl font-bold m-3">{detailAnime.title}</h1>
      <div className="flex gap-3 md:justify-center overflow-x-auto">
        <div className="text-color-primary border border-color-primary rounded p-2  flex flex-col justify-center items-center w-36">
          <h3 className="font-bold">Popularity</h3>
          <p>{detailAnime.popularity}</p>
        </div>
        <div className="text-color-primary border border-color-primary rounded p-2 flex flex-col justify-center items-center w-36">
          <h3 className="font-bold">Score</h3>
          <p>{detailAnime.score}</p>
        </div>
        <div className="text-color-primary border border-color-primary rounded p-2 flex flex-col justify-center items-center w-36">
          <h3 className="font-bold">Rank</h3>
          <p>{detailAnime.rank}</p>
        </div>
        <div className="text-color-primary border border-color-primary rounded p-2 flex flex-col justify-center items-center w-36">
          <h3 className="font-bold">Members</h3>
          <p>{detailAnime.members}</p>
        </div>
        <div className="text-color-primary border border-color-primary rounded p-2 flex flex-col justify-center items-center w-36">
          <h3 className="font-bold">Members</h3>
          <p>{detailAnime.members}</p>
        </div>
        <div className="text-color-primary border border-color-primary rounded p-2 flex flex-col justify-center items-center w-36">
          <h3 className="font-bold">Members</h3>
          <p>{detailAnime.members}</p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-4 md:p-3 pt-4">
        <Image src={detailAnime.images.webp.image_url} alt={detailAnime.images.jpg.image_url} width={500} height={450} />
        <div className="text-color-primary text-justify">
          <h1 className="text-xl font-bold md:text-justify text-center">Synopsis</h1>
          <p>{detailAnime.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Anime;
