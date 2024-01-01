import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { Link } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="m-3 py-8 text-center sm:py-11">
      <h1 className="mb-2 text-xl font-semibold text-stone-800  md:text-2xl  ">
        The best pizza.
        <br />
        <span className="font-black text-rose-500">
          {" "}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Link to="/menu">
          {" "}
          <Button>Order now , {username} </Button>
        </Link>
      )}
    </div>
  );
}

export default Home;
