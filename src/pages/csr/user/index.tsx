import Link from "next/link";
import { Tooltip } from "../../../components/popperTooltip";
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
          <Tooltip key={user.id}>
            <Link href={`user/${user.id}`}>
              <li>{user.name}</li>
            </Link>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
};

export default CSR;
