import { Link } from "react-router-dom";

export default function LinkButton({ children, to }) {
  return (
    <Link
      to={to}
      className="rounded-md bg-rose-500 p-1 font-medium
       text-stone-100 duration-500 hover:bg-opacity-0 
       hover:text-rose-500
       hover:duration-500"
    >
      {children}
    </Link>
  );
}
