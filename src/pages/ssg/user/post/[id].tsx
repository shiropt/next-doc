import { path } from "../../../../utils/path";
import { Post } from "../../../../utils/type";
import { GetStaticPaths, GetStaticProps } from "next";

const SSG_Post = (props: { data: Post }) => {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(path.posts);
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
  const res = await fetch(`${path.posts}/${id}`);
  const data = await res.json();
  const props = { data };

  return {
    props,
  };
};
export default SSG_Post;
