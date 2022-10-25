import Link from "next/link";
import { Search, Menu } from "react-feather";

export default function Header() {
  const links = [
    "Home",
    "Elections",
    "Developments",
    "Sports",
    "Health",
    "Politics",
  ];
  return (
    <header className="flex gap-4 flex-col p-4 mb-4">
      <div className="max-w-6xl mx-auto flex w-full place-content-between items-center">
        <Link href="/">
          <a className="font-bold leading-none text-2xl">
            <div>Natomas</div> News
          </a>
        </Link>
        <div>Social</div>
      </div>
      <div className="max-w-6xl mx-auto w-full flex place-content-between items-center">
        <div className="flex flex-row gap-4 text-xl">
          {links.map((text) => (
            <Link href={"/" + text.toLowerCase()} key={text}>
              <a className="hover:text-blue-600">{text}</a>
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <Search />
          <Menu />
        </div>
      </div>
    </header>
  );
}
