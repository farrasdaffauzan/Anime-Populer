import Link from "next/link";

const Header = ({ title, linkpage, linkhref }) => {
  return (
    <div className="p-4 flex justify-between items-center text-color-primary">
      <h1 className="md:text-2xl text-md font-bold">{title}</h1>
      {linkhref && linkpage ? (
        <Link href={linkhref} className="md:text-md text-sm underline cursor-pointer hover:text-color-accent transition-all">
          {linkpage}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
