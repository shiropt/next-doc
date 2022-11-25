import { GetServerSideProps, NextPage } from "next";
import { path } from "../../../utils/path";
import { User } from "../../../utils/type";
import Link from "next/link";

const SSR = (props: { data: User[] }) => {
  return (
    <div>
      <ul>
        {props.data.map((user) => (
          <Link key={user.id} href={`user/${user.id}`}>
            <li key={user.id}>{user.name}</li>
          </Link>
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
