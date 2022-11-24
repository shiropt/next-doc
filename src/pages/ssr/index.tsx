import { GetServerSideProps } from "next";
import { path } from "../../utils/path";
import { User } from "../../utils/type";

export default function Home(props: { data: User[] }) {
  return (
    <div>
      <ul>
        {props.data.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(path.users);
  const data = await res.json();
  const props = { data };

  return {
    props,
  };
};
