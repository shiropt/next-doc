import { useFetch } from "../../hooks/useFetch";
import { path } from "../../utils/path";
import { User } from "../../utils/type";

export default function CSR() {
  const { data } = useFetch<User[]>(path.users);
  if (!data) return <p>loading...</p>;

  return (
    <div>
      <ul>
        {data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
