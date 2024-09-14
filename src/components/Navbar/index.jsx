import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex justify-between items-center p-3">
        <Link href="/" className="font-bold md:text-2xl text-xl ">
          Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
