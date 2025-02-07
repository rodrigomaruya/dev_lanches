import Link from "next/link";
import { Nav } from "../nav";
import { Cart } from "../cart";
export async function Header() {
  return (
    <header className="w-full h-20 top-0 fixed z-[999999999999] bg-white">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <Link href={"/"}>
          <h1 className="text-3xl md:text-5xl font-bold ">
            DEV<span className="text-yellow-400">LANCHES</span>
          </h1>
        </Link>
        <Nav />
        <div>
          <Cart />
        </div>
      </div>
    </header>
  );
}
