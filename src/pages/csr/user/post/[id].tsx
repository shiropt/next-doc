import Link from "next/link";
import { path } from "../../../../utils/path";
import { Post } from "../../../../utils/type";
import { useRouter } from "next/router";
import { useFetch } from "../../../../hooks/useFetch";

const CSR_Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useFetch<Post>(`${path.posts}/${id}`);
  if (!data) return <p>loading...</p>;
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default CSR_Post;
