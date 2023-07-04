import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div>Page Not Found</div>
      <div>
        <Link to="/">go back home</Link>
      </div>
      <div>
        <Link to="tasks">check out task list</Link>
      </div>
    </>
  );
}
