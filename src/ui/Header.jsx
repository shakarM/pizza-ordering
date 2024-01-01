import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <header className="flex items-center justify-around border-b-4 border-rose-400 bg-rose-500 py-3 text-center">
      <Link to="/" className="tracking-[.10rem]">
        {" "}
        Fast Pizza .co
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
