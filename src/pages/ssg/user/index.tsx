import { GetStaticProps } from "next";
import Link from "next/link";
import { Tooltip } from "../../../components/popperTooltip";
import { path } from "../../../utils/path";
import { User } from "../../../utils/type";

const SSG = (props: { data: User[] }) => {
  return (
    <div>
      <ul>
        {props.data.map((user) => (
          <Tooltip key={user.id}>
            <Link href={`user/${user.id}`} prefetch={false}>
              <li key={user.id}>{user.name}</li>
            </Link>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(path.users);
  const data = await res.json();
  const props = { data };

  return {
    props,
  };
};

export default SSG;
