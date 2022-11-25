import Link from "next/link";
import { useFetch } from "../../../hooks/useFetch";
import { path } from "../../../utils/path";
import { User } from "../../../utils/type";

const CSR = () => {
  const { data } = useFetch<User[]>(path.users);
  if (!data) return <p>loading...</p>;

  return (
    <div>
      <ul>
        {data.map((user) => (
          <Link key={user.id} href={`user/${user.id}`}>
            <li>{user.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CSR;
