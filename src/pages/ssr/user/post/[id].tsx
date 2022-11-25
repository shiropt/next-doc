import { path } from "../../../../utils/path";
import { Post } from "../../../../utils/type";
import { GetServerSideProps } from "next";

const SSR_Post = (props: { data: Post }) => {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${path.posts}/${id}`);
  const data = await res.json();
  const props = { data };

  return {
    props,
  };
};

export default SSR_Post;
