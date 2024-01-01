import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.message}</p>
      <p>{error.data}</p>
      <LinkButton onClick={() => navigate(-1)}>&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
