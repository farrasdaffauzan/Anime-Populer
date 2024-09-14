export const getAnimeRespone = async (resouce, query) => {
  const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resouce}?${query}`);
  const anime = await respone.json();
  return anime;
};
