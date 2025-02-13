import { AiFillTikTok } from "react-icons/ai";
import { FiFacebook, FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="w-full px-4 pt-5 pb-9 border-t-2 shadow-sm ">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <p className="text-center">
          &copy; {new Date().getFullYear()} DEVLANCHES. Todos direitos
          reservados{" "}
        </p>

        <nav className="flex gap-4 mt-4">
          <a href="#">
            <FiFacebook size={24} />
          </a>
          <a href="#">
            <FiInstagram size={24} />
          </a>
          <a href="#">
            <AiFillTikTok size={24} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
