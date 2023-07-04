import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Welcome!!</div>
      <Link to="tasks">check out task list</Link>
    </>
  );
}
