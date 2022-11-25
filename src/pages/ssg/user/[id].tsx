import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { path } from "../../../utils/path";
import { Post } from "../../../utils/type";

const SSG_User = (props: { data: Post[] }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(path.users);
  const data = await res.json();
  const paths = data.map((user: any) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const res = await fetch(`${path.posts}?userId=${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

export default SSG_User;
