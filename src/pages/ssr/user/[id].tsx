import Link from "next/link";
import { path } from "../../../utils/path";
import { Post } from "../../../utils/type";
import { GetServerSideProps } from "next";

const SSR_User = (props: { data: Post[] }) => {
  return (
    <div>
      投稿一覧
      <ul>
        {props.data.map((post) => (
          <Link key={post.id} href={`post/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${path.posts}?userId=${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};
export default SSR_User;
