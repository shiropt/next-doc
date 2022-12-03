import { GetServerSideProps, NextPage } from "next";
import { path } from "../../../utils/path";
import { User } from "../../../utils/type";
import Link from "next/link";
import { Tooltip } from "../../../components/popperTooltip";

const SSR = (props: { data: User[] }) => {
  return (
    <div>
      <ul>
        {props.data.map((user) => (
          <Tooltip key={user.id}>
            <Link key={user.id} href={`user/${user.id}`}>
              <li key={user.id}>{user.name}</li>
            </Link>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(path.users);
  const data = await res.json();
  const props = { data };

  return {
    props,
  };
};

export default SSR;
